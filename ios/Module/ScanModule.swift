//
//  ScanModule.swift
//  Demo
//
//  Created by MeePwn on 2019/1/23.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(ScanModule)
class ScanModule: NSObject {
  
  @objc(scan:reject:)
  func scan(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
    DispatchQueue.main.async {
      let navigationController = UIApplication.shared.keyWindow?.rootViewController as! UINavigationController
      let qrVC = SWQRCodeViewController()
      qrVC.callBack = { value in
        resolve(value)
      }
      navigationController.pushViewController(qrVC, animated: true)
    }
  }

}
