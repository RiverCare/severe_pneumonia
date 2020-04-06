package com.pneumonia.communication;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;

public class Data {
	public static ArrayList<String[]> fetchTop() throws IOException{
		ArrayList<String[]> values = new ArrayList<>();
		
		File dir = new File("src/main/resources/static/csv/top_all.csv");
		FileReader fileReader = new FileReader(dir.getPath());
		BufferedReader csv = new BufferedReader(fileReader);
		String[] value = csv.readLine().split(",");
		values.add(value);
		csv.close();
		
		dir = new File("src/main/resources/static/csv/top_city.csv");
		fileReader = new FileReader(dir.getPath());
		csv = new BufferedReader(fileReader);
		String line;
		String cityInfo = "";
		while((line = csv.readLine()) != null) {
			cityInfo += line;
		}
		value = cityInfo.split(";");
		values.add(value);
		csv.close();
		return values;
	}
}
