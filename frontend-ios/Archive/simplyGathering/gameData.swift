//
//  gameData.swift
//  simplyGathering
//
//  Created by Student on 5/13/25.
//
//
//import Foundation
//
//
//	
//	let url = "localhost:9847/game"
//	
//	private func getData(from url: String){
//		
//		URLSession.shared.dataTask(with: URL(string: url)!, completionHandler: {data, response, error in
//			
//			guard let data = data, error == nil else {
//				print("something went wrong")
//				return
//			} // have data
//			
//			var result: Response?
//			do {
//				result = JSONDecoder().decode(Response.self, from: data)
//			}
//			
//		})
//		
//		
//		struct HomeOwner: Codable {
//			var ownerName: String
//			var ownerAge: Int
//			var ownerAddress: Address
//			
//		}
//		
//		struct Address: Codable {
//			var streetAddress: String
//			var cityName: String
//			var zipCode: String
//			var stateName: String
//		}
//	}

