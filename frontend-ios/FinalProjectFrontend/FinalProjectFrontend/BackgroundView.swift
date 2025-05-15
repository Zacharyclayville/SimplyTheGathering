//
//  BackgroundView.swift
//  FinalProjectFrontend
//
//  Created by Zachary Clayville on 5/15/25.
//

// BackgroundView.swift
import SwiftUI

struct BackgroundView: View {
    var body: some View {
        Image("backgroundcards")
            .resizable()
            .scaledToFill()
            .ignoresSafeArea()
    }
}
