<html>
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<title>yige.org</title>
<script language="javascript" type="text/javascript">
function AddInput(){
   var input=document.createElement('input');//创建一个input节点
    var br=document.createElement('br');//创建一个br节点
    input.setAttribute('type','file');//设置input节点type属性为file
    input.setAttribute('name','files[]');//设置input节点name属性为files[]，以 数组的方式传递给服务器端
    document.form1.appendChild(br);//把节点添加到form1表单中
    document.form1.appendChild(input);
}
</script>
</head>
<body>
<?php
if($_POST['sub']){
    $fileType=array('image/jpg','image/jpeg','image/png','image/pjpeg','image/gif');//允许上传的文件类型
    $num=count($_FILES['files']['name']);   //计算上传文件的个数
    for($i=0;$i<$num;$i++)
    {
           if($_FILES['files']['name'][$i]!=''&&is_uploaded_file($_FILES['files']['tmp_name'][$i]))
           {
                if(in_array($_FILES['files']['type'][$i],$fileType))//判断文件是否是允许的类型
                {
                     $fname='upfile/'.$_FILES['files']['name'][$i];
                     move_uploaded_file($_FILES['files']['tmp_name'][$i],$fname);
                     echo '<br/>文件上传成功！';
                }else
                {
                     echo '<br/>不允许上传该文件类型';
                }
           }else
           {
            echo '<br/>没有上传文件';
           }
    }
}
?>
<form name="form1" method="post" action="" enctype="multipart/form-data" >
    <input type="file" name="files[]" />
    <input type="submit" name="sub" value="上传"/>
</form>
<a href="#" onclick="AddInput()">再上传一张</a>
</body>
</html>
