# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import base64
from django.shortcuts import render, Http404, HttpResponse,render_to_response,reverse
from django.shortcuts import get_object_or_404
from django.template import RequestContext, loader
# from .models import Article, Question,Article1,Publication
from All_utile.Img_util.imgVerification import generate_verify_image
from All_utile import models
import datetime
from django.db.models import Q,F
# Create your views here.


# def year_archive(req,year):
#     # a_list = Article.
#     pass
#
# '''
#     简化查询步骤
#     可以在对 对象细致查询时使用
# '''
# def month_archive(req,month):
#     obj = get_object_or_404(id='fit')
#     return obj
#
# def dat_archive(req,month):
#     pass
#
#
# def index(req):
#     if req.method == "GET": #这边应该写进一个try catch结构中
#         latest_question_list = Question.objects.order_by('-pub_date')[:5]
#         context = {'latest_question_list': latest_question_list}
#         return render(req, 'index.html', context)
#     # if req.method == "POST":
#     #     return Http404
#
# def detail(req, question_id):
#     if req.method == "GET":
#         return HttpResponse("your question_id is %s" % question_id)
#
# def results(req, question_id):
#     if req.method == "GET":
#         return HttpResponse("your question_id is %s" % question_id)
#
# def vote(req, question_id):
#     if req.method == "GET":
#         return HttpResponse("your question_id is %s" % question_id)
#
# def GetPublication(req, Pub):
#     if req.method == "GET":
#         try:
#             T = Pub.Article1.all()
#             print(T)
#         except:
#             return Http404
# '''
# 测试js
# '''
def testjs(req):
    return render(req, 'testjs.html')
#
# def jsdate(req):
#     if req.method == "GET":
#         return render(req, 'Date.html')
#     if req.method == "POST":
#         pass
#
# def selector(req):
#     if req.method == "GET":
#         return render(req, 'selsctor.html')
#     elif req.method == "POST":
#         pass
#     else:
#         pass
#
#
# def changehtml(req):
#     if req.method == "GET":
#         return render(req, 'changeHtml.html')
#     else:
#         pass
#
# def imgcheck(req):
#     if req.method == "GET":
#         stream, strs = generate_verify_image(save_img=False)
#         stream = base64.b64encode(stream.getvalue()).encode('ascii')
#         return render_to_response('img_check.html', {'img': stream})
# def get_str(req):
#     str = Question.question_text
#     return render_to_response('index.html',{'str':str})
#
#
#
#
#
#
#
#
#
#
#
# # 周4 课程
# '''
# 1. models 中的各种字段
# '''
#
# def CreatDate(req):
#     # print(datetime.date.today())
#     new_date = models.DateModel.objects.create()
#     # Dates = models.DateModel.objects.all()[:5]
#     # Dates = models.DateModel.objects.all()[5:10]
#     # Dates = models.DateModel.objects.all()[:10:2]
#     Dates = models.DateModel.objects.all().order_by("-id")[:5]
#     ids = models.DateModel.objects.all().order_by("-id")[:5].values('id')
#     return render_to_response('Date.html', {"Dates": Dates, "ids": ids})
#
#
# # 利用Q  ☞  Query  以及 F ☞ Find and Get Value
# def Query_set(req):
#     auther = models.Author.objects.filter()
#     return HttpResponse('6666')

def Ckeditor(req):
    return render_to_response('Ckeditor.html')


# Html间传递参数
def MessagSender(req):
    return render(req, 'sender.html')

def MessageRecever(req):
    return render(req, 'reciver.html')

# FileUploader