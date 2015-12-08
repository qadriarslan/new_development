package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/**
 * Servlet implementation class JSONServlet
 */
@WebServlet(description = "JSONServlet", urlPatterns = { "/JSONServlet" })
public class JSONServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public JSONServlet() {
		super();
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		JSONArray addresses = new JSONArray();
		for (int i = 0; i < 10; i++) {
			JSONObject address = new JSONObject();
			address.put("CustomerName", "Decepticons" + i);
			address.put("AccountId", "1999" + i);
			address.put("SiteId", "1888" + i);
			address.put("Number", "7" + i);
			address.put("Building", "StarScream Skyscraper" + i);
			address.put("Street", "Devestator Avenue" + i);
			address.put("City", "Megatron City" + i);
			address.put("ZipCode", "ZZ00 XX1" + i);
			address.put("Country", "CyberTron" + i);
			addresses.add(address);
		}

		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
		out.print(addresses);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
