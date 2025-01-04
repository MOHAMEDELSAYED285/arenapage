import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '@/components/shared/Layout';
import SessionCard from '@/components/sessions/SessionCard';
import { Filter, Calendar, MapPin, ThumbsUp } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface Session {
 id: number;
 sport: string;
 date_time: string;
 location: string;
 game_size: string;
 price: number;
 total_slots: number;
 booked_slots: number;
 slots_remaining: number;
 match_score?: number;
}

interface Filters {
 sport: string;
 date: string;
 location: string;
}

const SessionsPage = () => {
 const router = useRouter();
 const { location, sports, fromQuiz } = router.query;
 const [recommendedSessions, setRecommendedSessions] = useState<Session[]>([]);
 const [allSessions, setAllSessions] = useState<Session[]>([]);
 const [filteredAllSessions, setFilteredAllSessions] = useState<Session[]>([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);
 const { user } = useAuth();
 const [filters, setFilters] = useState<Filters>({
   sport: '',
   date: '',
   location: ''
 });

 const sportOptions = ['All', 'FOOTBALL', 'BASKETBALL', 'TENNIS', 'CRICKET', 'RUGBY'];
 const locationOptions = ['All', 'NORTH', 'SOUTH', 'EAST', 'WEST', 'CENTRAL'];

 const getUniqueLocations = () => {
   const uniqueLocations = Array.from(new Set(allSessions.map(session => session.location)));
   return ['All', ...uniqueLocations];
 };

 const getUniqueSports = () => {
   const uniqueSports = Array.from(new Set(allSessions.map(session => session.sport)));
   return ['All', ...uniqueSports];
 };

 useEffect(() => {
   const fetchSessions = async () => {
     if (!router.isReady) return;

     try {
       const token = localStorage.getItem('token');
       const config = {
         headers: {
           'Authorization': `Bearer ${token}`,
           'Content-Type': 'application/json'
         }
       };

       // First, fetch all sessions
       const allSessionsResponse = await axios.get(
         `${process.env.NEXT_PUBLIC_API_URL}/api/sessions/`,
         config
       );
       const allSessionsData = allSessionsResponse.data.results || [];
       setAllSessions(allSessionsData);
       setFilteredAllSessions(allSessionsData);

       // If coming from quiz, fetch recommended sessions
       if (fromQuiz === 'true' && sports) {
         console.log('Fetching sessions based on quiz responses...');
         const recommendedResponse = await axios.post(
           `${process.env.NEXT_PUBLIC_API_URL}/api/quiz-preferences/`,
           {
             favouriteSports: typeof sports === 'string' ? sports.split(',') : sports,
             location: location
           },
           config
         );
         console.log('Quiz response data:', recommendedResponse.data);
         const recommendedData = recommendedResponse.data.recommendations || [];
         setRecommendedSessions(recommendedData);
       }

       setLoading(false);
     } catch (error: any) {
       console.error('Error fetching sessions:', error.response || error);
       setError(error.response?.data?.error || 'Failed to fetch sessions');
       setLoading(false);
     }
   };

   fetchSessions();
 }, [router.isReady, sports, fromQuiz, location, user]);

 useEffect(() => {
   console.log('Applying filters:', filters);
   console.log('Current sessions:', allSessions);
   
   let result = [...allSessions];

   if (filters.sport && filters.sport !== 'All') {
     result = result.filter(session => session.sport === filters.sport);
   }

   if (filters.location && filters.location !== 'All') {
     result = result.filter(session => session.location === filters.location);
   }

   if (filters.date) {
     const filterDate = new Date(filters.date).toDateString();
     result = result.filter(session => 
       new Date(session.date_time).toDateString() === filterDate
     );
   }

   console.log('Filtered results:', result);
   setFilteredAllSessions(result);
 }, [filters, allSessions]);

 const handleFilterChange = (key: keyof Filters, value: string) => {
   console.log('Filter changed:', key, value);
   setFilters(prev => ({
     ...prev,
     [key]: value
   }));
 };

 if (loading) {
   return (
     <Layout>
       <div className="min-h-screen flex items-center justify-center">
         <div className="text-xl">Loading sessions...</div>
       </div>
     </Layout>
   );
 }

 return (
   <Layout>
     <div className="min-h-screen bg-gray-50">
       <div className="bg-white border-b">
         <div className="max-w-7xl mx-auto px-4 py-16">
           <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
             Find Your Perfect Session
           </h1>
           <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
             {fromQuiz === 'true' 
               ? "We've found some sessions that match your preferences"
               : "Browse and book available sports sessions in your area"}
           </p>
           
           <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
             <div className="text-center">
               <div className="text-3xl font-bold text-arena-orange mb-2">
                 {allSessions.length}
               </div>
               <div className="text-sm text-gray-600">Available Sessions</div>
             </div>
             <div className="text-center">
               <div className="text-3xl font-bold text-arena-orange mb-2">
                 {getUniqueSports().length - 1}
               </div>
               <div className="text-sm text-gray-600">Different Sports</div>
             </div>
             <div className="text-center">
               <div className="text-3xl font-bold text-arena-orange mb-2">
                 {getUniqueLocations().length - 1}
               </div>
               <div className="text-sm text-gray-600">Locations</div>
             </div>
           </div>
         </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 py-12">
         {fromQuiz === 'true' && recommendedSessions.length > 0 && (
           <div className="mb-16">
             <div className="flex items-center gap-3 mb-8">
               <ThumbsUp className="w-8 h-8 text-arena-orange" />
               <h2 className="text-3xl font-bold">Recommended For You</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {recommendedSessions.map((session) => (
                 <SessionCard 
                   key={session.id}
                   id={session.id}
                   sport={session.sport}
                   dateTime={new Date(session.date_time).toLocaleString()}
                   location={session.location}
                   gameSize={session.game_size}
                   price={session.price}
                   slotsRemaining={session.slots_remaining}
                   matchScore={session.match_score}
                 />
               ))}
             </div>
           </div>
         )}

         <div className="mt-16">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
             <h2 className="text-3xl font-bold">
               {fromQuiz === 'true' ? 'Other Available Sessions' : 'All Available Sessions'}
             </h2>

             <div className="flex flex-wrap items-center gap-4">
               <select
                 value={filters.sport}
                 onChange={(e) => handleFilterChange('sport', e.target.value)}
                 className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm focus:border-arena-orange focus:ring-1 focus:ring-arena-orange"
               >
                 <option value="All">All Sports</option>
                 {sportOptions.slice(1).map(sport => (
                   <option key={sport} value={sport}>{sport}</option>
                 ))}
               </select>

               <select
                 value={filters.location}
                 onChange={(e) => handleFilterChange('location', e.target.value)}
                 className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm focus:border-arena-orange focus:ring-1 focus:ring-arena-orange"
               >
                 <option value="All">All Locations</option>
                 {locationOptions.slice(1).map(location => (
                   <option key={location} value={location}>{location}</option>
                 ))}
               </select>

               <input
                 type="date"
                 value={filters.date}
                 onChange={(e) => handleFilterChange('date', e.target.value)}
                 className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm focus:border-arena-orange focus:ring-1 focus:ring-arena-orange"
               />
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {filteredAllSessions.length === 0 ? (
               <div className="col-span-full bg-white rounded-xl p-12 text-center">
                 <div className="mb-4">
                   <Filter className="w-12 h-12 text-gray-400 mx-auto" />
                 </div>
                 <h3 className="text-xl font-semibold mb-2">No Sessions Found</h3>
                 <p className="text-gray-600">
                   Try adjusting your filters to see more sessions
                 </p>
               </div>
             ) : (
               filteredAllSessions.map((session) => (
                 <SessionCard 
                   key={session.id}
                   id={session.id}
                   sport={session.sport}
                   dateTime={new Date(session.date_time).toLocaleString()}
                   location={session.location}
                   gameSize={session.game_size}
                   price={session.price}
                   slotsRemaining={session.slots_remaining}
                 />
               ))
             )}
           </div>
         </div>

         {error && (
           <div className="mt-8 p-4 bg-red-50 text-red-600 rounded-lg text-center">
             {error}
           </div>
         )}
       </div>
     </div>
   </Layout>
 );
};

export default SessionsPage;