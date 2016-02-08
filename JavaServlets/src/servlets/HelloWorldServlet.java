package servlets;

//Import required java libraries
import java.io.*;

import javax.servlet.*;
import javax.servlet.http.*;

public class HelloWorldServlet extends HttpServlet {
	private static final long serialVersionUID = 5493545808510450753L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String userName = null;

		Cookie[] cookies = request.getCookies();
		System.out.println(cookies.length);
		Cookie cookie = null;
		if (cookies != null) {
			for (int i = 0; i < cookies.length; i++) {
				cookie = cookies[i];
				System.out.println("Name: " + cookie.getName());
				System.out.println("Value: " + cookie.getValue());
				if ("userName".equals(cookie.getName())) {
					userName = cookie.getValue();
					System.out.println("Found value");
					break;
				}
			}
		}
		System.out.println("UserName: " + userName);

		// Set response content type
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();

		if (userName != null) {
			out.print("<h1>Hello " + userName + "!!</h1>");
		} else {
			String title = "Reading Cookies Example";
			String docType = "<!doctype html public \"-//w3c//dtd html 4.0 "
					+ "transitional//en\">\n";
			out.println(docType + "<html>\n" + "<head><title>" + title
					+ "</title></head>\n" + "<body bgcolor=\"#f0f0f0\">\n");

			out.print("<form method='POST'><br>");
			out.print("Enter your name: <input type='text' name='userName'><br>");
			out.print("<input type='submit'><br>");
			out.print("</form><br>");
		}
		out.flush();
	}
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String userName = request.getParameter("userName");
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		if(userName != null) {
			Cookie cookie = new Cookie("userName", userName);
			cookie.setMaxAge(60);
			response.addCookie(cookie);
			out.print("<h3>Welcome " + userName + "</h3>");
		}
		else {
			out.print("<h3>You are not supposed to be here!!</h3>");
		}
		out.flush();
	}
}