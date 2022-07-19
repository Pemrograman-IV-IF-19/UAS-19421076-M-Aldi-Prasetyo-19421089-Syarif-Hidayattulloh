import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:simple_shadow/simple_shadow.dart';

import '../../size_config.dart';
import '../../utils/constants.dart';
import 'LoginForm.dart';

class LoginComponent extends StatefulWidget {
  @override
  _LoginComponent createState() => _LoginComponent();
}

class _LoginComponent extends State<LoginComponent> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: SizedBox(
        width: double.infinity,
        child: Padding(
          padding:
          EdgeInsets.symmetric(horizontal: getProportionateScreenWidth(20)),
          child: SingleChildScrollView(
            child: Column(
              children: [
                SizedBox(height: SizeConfig.screenHeight * 0.04),
                SizedBox(height: SizeConfig.screenHeight * 0.04),
                SimpleShadow(
                  child: Image.asset('assets/images/Logo-3d.png',
                      height: 165, width: 500),
                  opacity: 0.5, // Default: 0.5
                  color: kPrimaryColor, // Default: Black
                  offset: Offset(5, 5), // Default: Offset(2, 2)
                  sigma: 2, // Default: 2
                ),
                SizedBox(height: SizeConfig.screenHeight * 0.04),
                Padding(
                  padding: EdgeInsets.only(left: 10),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('LOGIN', style: mTitleStyle16),
                    ],
                  ),
                ),
                SizedBox(height: 20),
                SignForm(),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
