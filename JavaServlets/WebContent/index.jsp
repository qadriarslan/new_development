<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Welcome</title>
</head>
<body>
	<%
		String message = "";
		String userName = null;
		Cookie[] cookies = request.getCookies();
		if (cookies != null) {
			for (Cookie cookie : cookies) {
				if ("userName".equals(cookie.getName())) {
					userName = cookie.getValue();
					break;
				}
			}
		}
		if (userName == null) {
			message = "I don't know who you are!!";
		} else {
			message = "You are " + userName + "!! I got you!!";
		}
	%>
	<h1><%=message%></h1>
</body>
</html>