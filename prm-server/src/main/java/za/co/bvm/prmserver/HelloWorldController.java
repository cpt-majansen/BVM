package za.co.bvm.prmserver;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
public class HelloWorldController {

    //GET
    //URI -- /hello-world
    //method -- "HELLO WORLD"
    @GetMapping(path="/hello-world")
    public String helloWorld(){
        return "HELLO WORLD";
    }

    //GET
    //URI -- /hello-world-bean
    //method -- "HELLO WORLD"
    @GetMapping(path="/hello-world-bean")
    public HelloWorldBean helloWorldBean(){
        return new HelloWorldBean("HELLO WORLD");
    }

    ///hello-world/path-variable/test
    @GetMapping(path="/hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldPathVAriable(@PathVariable String name){
        return new HelloWorldBean(String.format("HELLO WORLD, %s",name));
    }
    
}
