//
//  HomeView.swift
//  FinalProjectFrontend
//
//  Created by Zachary Clayville on 5/15/25.
//

// HomeView.swift
import SwiftUI

struct HomeView: View {
    var body: some View {
        ZStack {
            BackgroundView()
            
            VStack(spacing: 20) {
                Text("Welcome to Simply The Gathering")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                    .foregroundColor(.white)
                    .shadow(radius: 5)

                AdminButton()
            }
        }
    }
}
