<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js"
		type="text/javascript"></script>
	<script>
		$(document).ready(
				function() {
					var request = ({
						"message" : 'Hello from browser'
					});
					var jsonObj = JSON.stringify(request);
					$.ajax({
						data : {
							para : jsonObj
						},
						dataType : 'json',
						url : './JSONServlet',
						type : 'POST',
						success : function(result) {
							console.log(result);
							//alert(result);
						},
						error : function(error) {
							console.log(error);
							alert('Ajax readyState: ' + xhr.readyState
									+ '\nstatus: ' + xhr.status + ' ' + err);
						}
					});
				});
	</script>
<body>
</body>
</html>