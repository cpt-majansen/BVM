package com.example;

import java.io.FileOutputStream;

import com.itextpdf.text.Document;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;
  
public class GenerateProtectedPdf{  
    private static String USER_PASSWORD = "1234567";  
    private static String OWNER_PASSWORD = "javatpoint";  
    public static void main(String args[]){  
        try{  
            //location where PDF will be generated    
            FileOutputStream fos = new FileOutputStream("SDS Test.pdf");  
            System.out.println("Password Protected File Generated.");  
            //creates an instance of PDF document  
            Document doc = new Document();  
            //doc writer for the PDF  
            PdfWriter writer = PdfWriter.getInstance(doc, fos);  
            writer.setEncryption(USER_PASSWORD.getBytes(), OWNER_PASSWORD.getBytes(), PdfWriter.ALLOW_PRINTING, PdfWriter.ENCRYPTION_AES_128);  
            //opens the PDF
            doc.addTitle("SDS Test");
            doc.addAuthor("MATTHEW");
            doc.addCreationDate();
            doc.addCreator("Barrier Vulnerability Management Services");   
            doc.open(); 
            //adding paragraphs to the PDF

            doc.add(new Paragraph("______________________________________________________________________________"));
            doc.add(new Paragraph("                                                               SDS TEST PDF"));
            doc.add(new Paragraph("______________________________________________________________________________"));  
            // doc.add(new Paragraph("\n"));
            doc.add(new Paragraph("                                                          PRODUCT IDENTIFIER"));
            doc.add(new Paragraph("Trade Name:   ?"));  
            doc.add(new Paragraph("Synonyms:     ?"));  
            doc.add(new Paragraph("Product Code: ?"));  
            doc.add(new Paragraph("Use:          ?"));
            doc.add(new Paragraph("______________________________________________________________________________"));  
            // doc.add(new Paragraph("\n"));
            doc.add(new Paragraph("                                            MANUFACTURER OR SUPPLIER DETAILS"));  
            doc.add(new Paragraph("Company:             ?"));  
            doc.add(new Paragraph("Address:             ?"));  
            doc.add(new Paragraph("Telephone:           ?"));  
            doc.add(new Paragraph("Email Address:       ?"));  
            doc.add(new Paragraph("Emergency Telephone: ?"));  
            //closes the document  
            doc.close();  
            //closes the output stream  
            fos.close();  
        }   
        //catch the exception if any   
        catch (Exception e){  
        //prints the occurred exception   
            e.printStackTrace();  
        }  
    }  
}  
