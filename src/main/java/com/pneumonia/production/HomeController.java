package com.pneumonia.production;

import java.io.IOException;
import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.pneumonia.communication.Data;

@Controller
public class HomeController {
	@RequestMapping(value= "/", method = RequestMethod.GET)
	public ModelAndView home(ModelAndView mav) throws IOException {
		Data.writeStatView();
		return new ModelAndView("top");
	}
	
	@RequestMapping(value= "/getTop", method = RequestMethod.POST)
	@ResponseBody
	public ArrayList<String[]> getTop() throws IOException {
		return Data.fetchTop();
	}
	
	@RequestMapping(value= "/getStatView", method = RequestMethod.POST)
	@ResponseBody
	public String getStatView() throws IOException {
		return Data.fetchStatView();
	}
	
	@RequestMapping(value= "/getStat", method = RequestMethod.POST)
	@ResponseBody
	public String[] getStat(int loc) throws IOException {
		return Data.fetchStat(loc);
	}
}
