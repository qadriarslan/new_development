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
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	@SuppressWarnings("unchecked")
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {		
		int noOfRecords = Integer.parseInt(request.getParameter("size"));
		
		JSONArray dataArray = new JSONArray();
		for (int i = 0; i < noOfRecords; i++) {
			JSONObject data = new JSONObject();
			data.put("id", i + 1);
			data.put("title", "Task " + i);
			data.put("duration", "5 days");
			data.put("percentComplete", Math.round(Math.random() * 100));
			data.put("start", "01/01/2009");
			data.put("finish", "01/05/2009");
			data.put("effortDriven", (i % 5 == 0));
			dataArray.add(data);
	    }

		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
		out.print(dataArray);
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
