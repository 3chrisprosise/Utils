# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, Http404, HttpResponse
from django.shortcuts import get_object_or_404
from django.template import RequestContext, loader
from .models import Article, Question,Article1,Publication
# Create your views here.


def year_archive(req,year):
    # a_list = Article.
    pass

'''
    简化查询步骤
'''
def month_archive(req,month):
    obj = get_object_or_404(id='fit')
    return obj

def dat_archive(req,month):
    pass


def index(req):
    if req.method == "GET": #这边应该写进一个try catch结构中
        latest_question_list = Question.objects.order_by('-pub_date')[:5]
        context = {'latest_question_list': latest_question_list}
        return render(req, 'index.html', context)
    if req.method == "POST":
        return Http404

def detail(req, question_id):
    if req.method == "GET":
        return HttpResponse("your question_id is %s" % question_id)

def results(req, question_id):
    if req.method == "GET":
        return HttpResponse("your question_id is %s" % question_id)

def vote(req, question_id):
    if req.method == "GET":
        return HttpResponse("your question_id is %s" % question_id)

def GetPublication(req, Pub):
    if req.method == "GET":
        try:
            T = Pub.Article1.all()
            print T
        except:
            return Http404
'''
测试js
'''
def testjs(req):
    return render(req, 'testjs.html')

def jsdate(req):
    if req.method == "GET":
        return render(req, 'Date.html')
    if req.method == "POST":
        pass
