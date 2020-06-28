<template>
    <div class="container">
        <SearchBar @termChange ="onTermChange"></SearchBar>
        <VideoDetail :video="selectedVideo"> </VideoDetail>
        <VideoList 
        @videoSelect="onVideoSelect" 
        :videos="videos"></VideoList>
    </div>
</template>

<script>

import axios from 'axios';
import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail'

const API_KEY= 'AIzaSyCh_KKea5O3rtlxEG-KqIMWJHQ3lcZnLi0';

export default {
    name: 'App',
    components:{
        SearchBar ,
        VideoList,
        VideoDetail
    },
    data (){
        return {
            videos:[],
            selectedVideo: null
        };
    }
    ,
    methods: {
        onTermChange(searchTerm){
            axios.get('https://www.googleapis.com/youtube/v3/search',{
                params:{
                    key: API_KEY,
                    type:'video',
                    part: 'snippet',
                    q: searchTerm
                }
            }).then(response=>{
                this.videos= response.data.items
            });
        },
        onVideoSelect(video){
            this.selectedVideo=video;
        }
    }
};
</script>