//
//  AdminButton.swift
//  FinalProjectFrontend
//
//  Created by Zachary Clayville on 5/15/25.
//

// AdminButton.swift
import SwiftUI

struct AdminButton: View {
    var body: some View {
        Button(action: {
            print("View Admins tapped") 
        }) {
            Text("View Admins")
                .padding()
                .frame(maxWidth: .infinity)
                .background(Color.blue.opacity(0.8))
                .foregroundColor(.white)
                .cornerRadius(10)
                .padding(.horizontal)
        }
    }
}
