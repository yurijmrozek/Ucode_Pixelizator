package world.ucode;

import java.io.*;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/hello")
public class HelloServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        resp.setContentType("text/html");

        try (PrintWriter printWriter = resp.getWriter()) {
            String username = NullCheck(req, resp, "username");
            String userage = NullCheck(req, resp,"userage");
            String gender = req.getParameter("gender");
            String country = req.getParameter("country");
            String[] courses = req.getParameterValues("courses");

            printWriter.println("<p>Name: " + username + "</p>");
            printWriter.println("<p>Age: " + userage + "</p>");
            printWriter.println("<p>Gender: " + gender + "</p>");
            printWriter.println("<p>Country: " + country + "</p>");

            for (String i : courses)
                printWriter.println("<li>" + i + "</li>");
        }
    }

    private String NullCheck(HttpServletRequest req, HttpServletResponse resp, String fieldName)
            throws ServletException, IOException {

        if (req.getParameter(fieldName).length() > 0) {
            return req.getParameter(fieldName);
        } else {
            String path = "/null";
            ServletContext servletContext = getServletContext();
            RequestDispatcher requestDispatcher = servletContext.getRequestDispatcher(path);
            requestDispatcher.forward(req, resp);
        }
        return null;
    }
}