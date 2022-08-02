package com.example.Seartenprojectmanagement.Controller;


import com.example.Seartenprojectmanagement.Model.FoldeFile;
import com.example.Seartenprojectmanagement.Model.Req.NewProjectReq;
import com.example.Seartenprojectmanagement.Repository.FoldeFileRepository;
import com.example.Seartenprojectmanagement.Repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/folder")
public class FolderController {

    
    @Value("${upload.picture.path}")
    private String fileUpload;

    private final FoldeFileRepository foldeFileRepository;


    public FolderController(FoldeFileRepository foldeFileRepository) {
        this.foldeFileRepository = foldeFileRepository;

    }

    @PostMapping("/uploadFile")
    public String uploadFile(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return "上传失败，请选择文件";
        }
        String fileName = file.getOriginalFilename();
        File dest = new File(fileUpload + fileName);
        try {
            file.transferTo(dest);

            FoldeFile foldeFile = new FoldeFile();
            foldeFile.setFile_name(fileName);
            foldeFile.setFile_url("127.0.0.1:8080/temp/" + fileName);
            foldeFileRepository.save(foldeFile);
        } catch (IOException e) {
            e.printStackTrace();
            System.err.println("服务异常" + e);
        }
        return "127.0.0.1:8080/temp/" + fileName;
    }


    @GetMapping("/listFile")
    @ResponseBody
    public Object listFile() {
        return foldeFileRepository.findAll();
    }
}
