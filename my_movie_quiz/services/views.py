import requests
from django.http import HttpResponse
from django.views import View
from rest_framework.decorators import api_view


class TestSearch(View):
    def get(self, request):
        print('all set up')


class MovieSearch(View):
    def get(self, request, movie):

        url = "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/" + movie

        headers = {
            'x-rapidapi-key': "3c90722e1fmshd3624c65becfb47p1d49a9jsn722fc9909dc4",
            'x-rapidapi-host': "imdb-internet-movie-database-unofficial.p.rapidapi.com"
            }

        response = requests.request("GET", url, headers=headers)

        return HttpResponse(response)
        
class ActorsSearch(View):
    def get(self, request, actors):
        print(actors)

        # url = "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/" + movie

        # headers = {
        #     'x-rapidapi-key': "3c90722e1fmshd3624c65becfb47p1d49a9jsn722fc9909dc4",
        #     'x-rapidapi-host': "imdb-internet-movie-database-unofficial.p.rapidapi.com"
        #     }

        # response = requests.request("GET", url, headers=headers)

        # return HttpResponse(response)