package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class JSONServlet
 */
@WebServlet(description = "PushMessageServlet", urlPatterns = { "/PushMessageServlet" })
public class PushMessageServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // content type must be set to text/event-stream
        response.setContentType("text/event-stream");

        // encoding must be set to UTF-8
        response.setCharacterEncoding("UTF-8");

        PrintWriter writer = response.getWriter();
        int upVote = 0;
        int downVote = 0;
        for (int i = 0; i < 20; i++) {
            upVote = upVote + (int) (Math.random() * 10);
            downVote = downVote + (int) (Math.random() * 10);

            writer.write("event:up_vote\n");
            writer.write("data: " + upVote + "\n\n");

            writer.write("event:down_vote\n");
            writer.write("data: " + downVote + "\n\n");

            writer.flush();

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        writer.close();
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     *      response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException,
            IOException {
        doGet(request, response);
    }

}
