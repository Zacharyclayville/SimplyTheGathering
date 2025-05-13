//
//  gamePage.swift
//  simplyGathering
//
//  Created by Student on 5/12/25.
//

import SwiftUI

struct gamePage: View {
    var body: some View {
		VStack{
			ZStack {
				Color.cardGreen
					.ignoresSafeArea()
					.frame(height: 75)
				HStack {
					Image("cardPNG")
						.resizable()
						.frame(width: 75, height: 75)
					
					Text("Simply Gathering")
						.font(.title)
						.bold()
						.shadow(color: .white, radius: 3)
				}
				
			}
			
			
			
			Spacer()
			
			ZStack{
				Color.cardGreen
					.ignoresSafeArea(edges: .all)
					.frame(height: 50)
			}
			
		}
    }
}

#Preview {
    gamePage()
}
