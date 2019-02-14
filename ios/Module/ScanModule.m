//
//  ScanModule.h
//  Demo
//
//  Created by MeePwn on 2019/1/23.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ScanModule, NSObject)

RCT_EXTERN_METHOD(scan:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)

@end
