# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField


# Create your models here.
# class Reporter(models.Model):
#     Full_name = models.CharField(max_length=70)
#     def __str__(self):
#         return self.Full_name
#
# class Article(models.Model):
#     pub_date = models.DateField()
#     headline = models.CharField(max_length=200)
#     content = models.TextField()
#     reporter = models.ForeignKey(Reporter)
#     def __str__(self):
#         return self.headline
#
#
# class Question(models.Model):
#     question_text = models.CharField(max_length=200)
#     pub_date = models.DateTimeField('date published')
#
#
# class Choice(models.Model):
#     question = models.ForeignKey(Question)
#     choice_text = models.CharField(max_length=200)
#     votes = models.IntegerField(default=0)
#
#
#
# class Publication(models.Model):
#     id = models.AutoField(primary_key=True)
#     title = models.CharField(max_length=30)
#     def __unicode__(self):
#         return self.title
#     class Mata:
#         ordering = ('title',)
#
# class Article1(models.Model):
#     id = models.AutoField(primary_key=True)
#     headline = models.CharField(max_length=100)
#     publications = models.ManyToManyField(Publication)
#
#     def __unicode__(self):
#         return self.headline
#     class Mata:
#         ordering = ('headline',)
#
#
#
#
# # 练习  Query_set  周四的课程内容
# class Blog(models.Model):
#     Name = models.CharField(max_length=20)  # 不指定主键，自动添加 id --- AutoField
#     Tagline = models.TextField()
#
#     def __str__(self):
#         return self.Name
#
# class Author(models.Model):
#     Name = models.CharField(max_length=20)
#     Email = models.EmailField()
#
#     def __str__(self):
#         return self.Name
#
# class Entry(models.Model):  # Entry ->  条目   一般☞新闻的概览
#     blog = models.ForeignKey(Blog)
#     HeadLine = models.CharField(max_length=30)
#     BodyText = models.TextField()
#     PublishDate = models.DateTimeField(auto_now_add=True)    #Date
#     Authors = models.ManyToManyField(Author)
#
#
#     def __str__(self):
#         return self.HeadLine
#
#
# class BlogAndAuther(models.Model):
#     blog = models.ForeignKey(Blog)
#     auther = models.ForeignKey(Author)
#
# class New(models.Model):
#     blog = models.ForeignKey(Blog)
#     HeadLine = models.CharField(max_length=30)
#     BodyText = models.TextField()
#     PublishDate = models.DateTimeField()
#
#
# class DateModel(models.Model):
#     Name = models.CharField(max_length=10,null=True)
#     DateTime = models.DateTimeField(auto_now_add=True,null=True)
#     Date = models.DateField(auto_now_add=True,null=True)
#     Time = models.TimeField(auto_now_add=True,null=True)
#
#     def __str__(self):
#         return 'D: '+str(self.Date) + ' DT: '+str(self.DateTime) + ' T: ' + str(self.Time)
#
#
#
# class User(models.Model):
#     Id = models.AutoField(primary_key=True)
#     Name = models.CharField(max_length=20)
#
# # class Ckeditor(models.Model):
# #
# #     Id = models.AutoField(primary_key=True)
# #     Text = models.TextField()
# #     Image = models.


class Ckeditor_RichField(models.Model):
    body = RichTextUploadingField(verbose_name=u'内容')

