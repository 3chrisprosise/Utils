# Django 数据库知识总结
------------------------------
###1.数据库字段

    from django.db import models
    
     
    class Blog(models.Model):
    
        name = models.CharField(max_length=100)
    
        tagline = models.TextField()
    
     
        def __str__(self):
    
            return self.name
    
     
    
    class Author(models.Model):
    
        name = models.CharField(max_length=50)
    
        email = models.EmailField()
    
     
    
        def __str__(self):
    
            return self.name
            
     
    class Entry(models.Model):
    
    
        blog = models.ForeignKey(Blog)
    
        headline = models.CharField(max_length=255)
    
        body_text = models.TextField()
    
        pub_date = models.DateTimeField()
    
        authors = models.ManyToManyField(Author)
        
    
        def __str__(self):
    
            return self.headline

--------------------------------------
1. AutoField

        指一个能够根据可用ID自增的 IntegerField 。通常你不用直接使用它，如果你没有指定主键的话，系统会自动在你的模型中加入这样的主键。

2. <font color=#0099ff size=4>BooleanField</font>

        一个真／假（true/false）字段。

3. <font color=#0099ff size=4>CharField</font>

        一个字符串字段，适用于中小长度的字符串。对于长段的文字，请使用 TextField 。
    
        CharField 有一个额外的必需参数： maxlength ，它是字段的最大长度（字符数）。这个最大长度在数据库层面和Django验证中是被强制要求的。

4. CommaSeparatedIntegerField

        一个用逗号分隔开的整数字段。和 CharField 中一样， maxlength 参数是必需的。

5. <font color=#077700 size=4>DateField</font>

        日期字段。 DateField 有一些额外的可选参数
        
6. <font color=#077700 size=4>DateTimeField</font>

        时间日期字段。接受跟 DateField 一样的额外选项。

7. <font color=#0099ff size=4>EmailField</font>


        一个能检查值是否是有效的电子邮件地址的 CharField 。不接受 maxlength 参数，它的 maxlength 被自动设置为75。

8. FileField

        一个文件上传字段。它有一个 必需的 参数，如表B-3所示。

9. FilePathField
    
        一个拥有若干可选项的字段，选项被限定为文件系统中某个目录下的文件名。它有3个特殊的参数
        ImageField
        
        像 FileField 一样，只不过要验证上传的对象是一个有效的图片。它有两个额外的可选参数： height_field 和 width_field ，如果设置了的话，每当模型实例被保存的时候，这两个值就会被设置成图片的高度和宽度。
        
        FileField 中有一系列的 get_FIELD_* 方法，作为一种补充， ImageField 提供了 get_FIELD_height() 和 get_FIELD_width() 方法。附录C中有相关文档。

10. ImageField 
    
        依赖Python图片库（ http://www.pythonware.com/products/pil/ ）。存储值为路径

11. IntegerField

        一个整数。

12. IPAddressField

        一个IP地址，以字符串格式表示（例如： "24.124.1.30" ）。

13. NullBooleanField

        就像一个 BooleanField ，但它支持 None /Null 。尽量使用这个，而不要使用设置了 null=True 的 BooleanField 。

14. PhoneNumberField

         它是一个 CharField ，并且会检查值是否是一个合法的美式电话格式，如（XXX-XXX-XXXX）。

    备注：

        如果你需要表示一个其他国家的电话号码，检查 django.contrib.localflavor 包，看看是否包括对应你的国家的字段定义。

15. <font color=#0099ff size=4>PositiveIntegerField</font>

        和 IntegerField 类似，但必须是正值。

16. PositiveSmallIntegerField

        与 PositiveIntegerField 类似，但只允许小于一定值的值。最大值取决于数据库，但因为数据库有一个2-byte的小整数字段，最大的小整数正值一般都是65,535。

17. <font color=#0099ff size=4>SmallIntegerField</font>

        和 IntegerField 类似，但是只允许在一个数据库相关的范围内的数值（通常是-32,768到+32,767）。

18. <font color=#0099ff size=4>TextField</font>

        一个不限长度的文字字段。

19. <font color=#077700 size=4>TimeField</font>

        时分秒的时间显示。它接受的可指定参数与 DateField 和 DateTimeField 相同。

20. URLField

        用来存储URL的字段。如果 verify_exists 选项被设置为 True （默认），给出的URL就会被检测是否存在（例如：这个URL的确被加载并且没有给出一个404响应）。
        
        和其他字符字段一样， URLField 接受 maxlength 参数。如果你没有指定 maxlength ，则使用默认值200。
21. <font color=#ff0000 size=4>ForeignKey</font>
    1. related_name
    
            关联对象反向引用描述符
    
    2. to_field
    
            关联对象的用于关联的字段，Django默认使用关联对象的主键。
22. <font color=#ff0000 size=4>ManyToManyField</font>
---------------------------------------
##数据库字段选项

1. null
    
        如果设置为 True 的话，Django将在数据库中存储空值为 NULL 。默认为 False 。
        
        记住，空字符串值保存时总是以空字符串的形式存在，而不是 NULL 。一般只对非字符串字段使用 null=True ，比如整型、布尔型和日期型。对于这两种字段，如果你允许表单中的对应值为空的话，你还需要设定 blank=True ，因为 null 参数只影响数据库存储（参见下面题为blank的一节）。
        
        如果没有充分理由的话，应该尽量避免对诸如 CharField 和 TextField 这样字符串字段使用 null 参数。如果对字符串字段指定了 null=True 的话，这意味着空数据有两种可能的值： NULL 和空字符串。而大多数情况下，空数据没必要对应两种可能的值，所以Django中习惯使用空字符串，而不是 NULL
2. blank

        如果是 True ，该字段允许留空，默认为 False 。
        
        注意这与 null 不同， null 完全是数据相关的，而 blank 是用来做验证的。如果一个字段设置了 blank=True ，在Django的管理界面会允许该字段留空，如果设置了 blank=False ，那么这就是一个必填字段。
3. db_column

        当前字段在数据库中对应的列的名字。如果没有指定的话，Django会使用这个字段的名字。当你要定义一个数据库中存在命名冲突的模型时，这个选项非常有用。
        
        如果你指定的数据库列名称是SQL的保留字，或者名称中包含Python变量名不允许的字符（就是连字符），没问题，Django会悄悄地把列名或者表名用引号引起来。
4. unique

        如果是 True ，这个字段的值在整个表中必须是唯一的。

5. unique_for_month

        和 unique_for_date 类似，只是要求字段在指定字段的月份内唯一。

6. unique_for_year

        和 unique_for_date 及 unique_for_month 类似，只是时间范围变成了一年。
7. db_table

        模型对应的数据库表的名字。
8. <font color=#ff0000 size=4>ordering</font>

        对象默认的排序方法，获取对象列表时会用到。
        
        用法
        ```python
        
            class Book(models.Model):
            title = models.CharField(maxlength=100)
            class Meta:
            ordering = ['title'] #['-title']
            
        ```

9. \_\_str__()
        
        一种神奇的方法，当你在调用它的时候，会显示这个函数的返回值
        
10. primary_key

        定义数据项为主键，字段不可为空，且不可重
     
     
数据增删改查
---------------------------------------
####1. 创建

    b2 = Blog(name='Cheddar Talk', tagline='Thoughts on cheese.')
    b2.save()
    
    # 删除记录
    b2.delete()

   ######或者
   
    Author.objects.create(name="Joe")
    
####2.查询
   1.<font color=#ff0000 size=4>有条件的查询 </font>
    
    blogs = Blog.objects.filter(author__name="Joe")

   ######或者
   
    blog = Blog.objects.get(author__name="Joe") # 注意在用get查询数据库时候可能会抛出对象不存在的异常

   ######注意两者区别,<font color=#ff0000 size=4>以及</font>

    blogs = Blog.objects.exclude(author__name="Joe")

   2.无条件获取全部

    entrys = Entry.objects.all()
   3.排序查询

    entrys =  Entry.objects.order_by('headline').filter()
    
    这里的orderby可以添加多条件，并且以条件的顺序作为查询的顺序依据

  4.取一部分数据

    entrys = Entry.objects.all()[5:10]
    entrys = Entry.objects.all()[5:10:2]

  5.去除重复值

    distinct()

  6.获取具体内容项

    Blog.objects.filter(name__startswith='Beatles').values()

  7.count()

    统计查询项的数目
    
    >>> Entry.objects.filter(headline__contains='Lennon').count()
  8. update() 更改字段属性 
  
    注意 update() 调用时 
    
    如果是较为简单的数据库字段更改操作，可以利用 F() 表达式实现 
####filter() 常用附加参数
1. exact
    
        Entry.objects.get(headline__exact="Man bites dog")
        
        功能上完全等于：
        
        Entry.objects.get(headline="Man bites dog")
        
        那么为什么要出现这个？
        
        Entry.objects.get(headline__iexact="Man bites dog") # 大小写的区分
        
        另外还有一些省略的语句，例如 
        
        pk = primiary_key
        
2. contains

        Entry.objects.get(headline__contains='Lennon') #包含
        Entry.objects.get(headline__icontains='Lennon') # 包含且不区分大小写
    
3. gt, gte, lt,  lte 比较符号

        Entry.objects.get(id__gt=1) # 四个参数分别对应了 大于，大于等于，小于，小于等于，小于

4. 开头和结尾的匹配

          __startswith   以  开头
          __istartswith   以   开头，且忽略大小写
          __endswith      以   结尾
          __iendswith     以   结尾，忽略大小写
    
          Entry.objects.get(Name__startswith='Le')
          Entry.objects.get(Name__startswith='Le')
          Entry.objects.get(Name__startswith='Le')
          Entry.objects.get(Name__startswith='Le')
5. range 匹配范围

        You can use range anywhere you can use BETWEEN in SQL for dates, numbers, and even characters
    
        Entry.objects.filter(id__range=(2,10))
    
        匹配字符，数字，日期 日期比较难 后面再讲
        
6. isnull 判断

        Entry.objects.filter(pub_date__isnull=True)
    
        选择某项属性为空的所有数据项
7. Q 联合条件查询

        Poll.objects.get(
    
        Q(pub_date=date(2005, 5, 2)) | Q(pub_date=date(2005, 5, 6)),
    
        question__startswith='Who')
    
        联合查询条件
        
        在Q之前加上 ~ 表示否定，例如
        
        oll.objects.get(
    
        Q(pub_date=date(2005, 5, 2)) | ~Q(pub_date=date(2005, 5, 6)),
    
        question__startswith='Who')
        
8. 日期格式化提取 dates(field, kind, order)
    
        Entry.objects.dates('pub_date', 'month')
    
        [datetime.datetime(2005, 2, 1), datetime.datetime(2005, 3, 1)]
    

#### <font color=#ff0000 size=4> 外键查询</font>

1. 外键属性查询

        Entry.objects.filter(blog__name__exact='Beatles Blog')
        
        如果一个 ForeignKey 字段设置了 null=True 选项（允许 NULL 值）时，你可以将 None 赋给它
        
    
2. 缓存查询 selsct_related()

        在包含外键的查询中

3. 指定sql语句查询

        >>> subq = 'SELECT COUNT(*) FROM blog_entry WHERE blog_entry.blog_id = blog_blog.id'
    
        >>> Blog.objects.extra(select={'entry_count': subq})
        
        >>> Entry.objects.extra(where=['id IN (3, 4, 5, 20)'])
        
        当需要指定参数时
        
        >>> Entry.objects.extra(where=['headline=%s'], params=['Lennon'])


4. in_bulk(id_list) 根据提供的 id list 查询 <font color=#ff0000 size=4> 可以迅速返回对象？</font>

       >>> Blog.objects.in_bulk([1, 2])  
       
        获取主键值列表，并返回将每个主键值映射到具有给定ID的对象实例的字典
        
       >>> {1: Beatles Blog, 2: Cheddar Talk}
5. 获取最新 latest(field_name=None)

       >>> Entry.objects.latest('pub_date')
       
####<font color=#ff0000 size=4>反向外键查询</font>

1. 反向查询格式 
    
       被索引的关系模型可以访问所有参照它的模型的实例，如
       Entry.blog 作为 Blog 的外键，
       默认情况下 Blog.entry_set 是包含所有参照 Blog 的 Entry 示例的查询集,
       可以使用查询集API取出相应的实例。
       
       >>> b = Blog.objects.get(id=1)  # 确定一个 Blog 实体
       
       >>> b.entry_set.all()  # 获取所有外键中包含 b 的 Entry 的集合 最终获取的是 Entry 的实例 
       
       之前的数据库字段定义为：
       
       class Entry(models.Model):
        
             blog = models.ForeignKey(Blog)
        
        

2. 反向查询依然可以包含筛选

        >>> b.entries.filter(headline__contains='Lennon')

        >>> b.entries.count()

3. 同样在反向查询时也可以添加数据项  add(obj1, obj2, ...)

        >>> b = Blog.objects.get(id=1)

        >>> e = Entry.objects.get(id=234)
        
        >>> b.entry_set.add(e) # Associates Entry e with Blog b.

4. 删除关联

        >>> b = Blog.objects.get(id=1)

        >>> e = Entry.objects.get(id=234)
        
        >>> b.entry_set.remove(e) # 这里仅仅是删除了数据之间的关联
        
        
        同时也可以删除所有关联 :
        
        
        >>> b = Blog.objects.get(id=1)

        b.entry_set.clear()
        
        
        ！！！！注意 ： 这两个字段只能用于 字段   null = True 的情况

### 多对多关系
1. 多对多关系一般用外键 + 额外表 的 方式实现