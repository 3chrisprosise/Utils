# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-10-01 07:15
from __future__ import unicode_literals

import ckeditor.fields
import ckeditor_uploader.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('All_utile', '0010_auto_20170925_1145'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ckeditor_RichField',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Rich', ckeditor.fields.RichTextField(verbose_name='\u6b63\u6587')),
                ('body', ckeditor_uploader.fields.RichTextUploadingField(verbose_name='\u5185\u5bb9')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('Id', models.AutoField(primary_key=True, serialize=False)),
                ('Name', models.CharField(max_length=20)),
            ],
        ),
    ]
