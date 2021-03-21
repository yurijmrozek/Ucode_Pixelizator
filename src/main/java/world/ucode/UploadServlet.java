package world.ucode;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "upload-servlet", value = "/upload-servlet")
public class UploadServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String name = request.getParameter("fname");
        String size = request.getParameter("fsize");
        String format = request.getParameter("fformat");
        Part file = request.getPart("file");
        String range = request.getParameter("range");

        response.getOutputStream().print("Name: " + name
                    + "\nSize: " + size
                    + "\nFormat: " + format
                    + "\nFile: " + file
                    + "\nRange: " + range);
    }

}
