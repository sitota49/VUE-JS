<template>
    <div class="container">
        <SearchBar @termChange ="onTermChange"></SearchBar>
        <div class="row">
        <VideoDetail
        :video="selectedVideo"> </VideoDetail>
        <VideoList 
        @videoSelect="onVideoSelect" 
        :videos="videos"></VideoList>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail'

const API_KEY= 'AIzaSyAcYTKaz1wvsZJnHMeZ6mje0eKwqIBHhwk';

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
            }).catch(response=>{
                console.log(response);
            });
        },
        onVideoSelect(video){
            this.selectedVideo=video;
        }
    }
};
</script>