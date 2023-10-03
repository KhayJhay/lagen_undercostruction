// ignore_for_file: file_names, camel_case_types

import 'package:flutter/material.dart';
import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:google_fonts/google_fonts.dart';

class UnderConstructionPage extends StatelessWidget {
  const UnderConstructionPage({super.key});

  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    return Scaffold(
      body: LayoutBuilder(
        builder: (context, constraints) {
          if (constraints.maxWidth < 950) {
            return Container(
              color: Colors.black,
              child: Padding(
                padding: EdgeInsets.only(
                  top: height / 6.5,
                ),
                child: SingleChildScrollView(
                  child: Column(
                    children: [
                      Container(
                        height: 300,
                        width: width,
                        decoration: BoxDecoration(
                            image: DecorationImage(
                                image: AssetImage('assets/images/firstbg.jpeg'),
                                fit: BoxFit.cover)),
                        child: Container(
                          decoration: BoxDecoration(
                            gradient: LinearGradient(
                                begin: Alignment.bottomCenter,
                                end: Alignment.topCenter,
                                colors: [Colors.black, Colors.black12]),
                          ),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Image.asset(
                                'assets/pngs/lagen.png',
                                color: Colors.white,
                                scale: 3,
                              ),
                              const Text(
                                'If You Can Dream It, You Can Do It',
                                style: TextStyle(
                                    fontWeight: FontWeight.w600,
                                    color: Colors.white),
                              ),
                            ],
                          ),
                        ),
                      ),
                      Padding(
                          padding: const EdgeInsets.all(50.0),
                          child: Column(
                            children: [
                              Text(
                                "WE'RE STILL",
                                style: GoogleFonts.lato(
                                  textStyle: TextStyle(
                                      color: Colors.white, letterSpacing: .5),
                                ),
                              ),
                              SizedBox(
                                height: 40,
                              ),
                              AnimatedTextKit(
                                animatedTexts: [
                                  TypewriterAnimatedText(
                                    'Cooking Our Website.',
                                    textStyle: const TextStyle(
                                      fontSize: 32.0,
                                      color: Colors.white,
                                      fontWeight: FontWeight.bold,
                                    ),
                                    speed: const Duration(milliseconds: 200),
                                  ),
                                ],
                                totalRepeatCount: 8,
                                pause: const Duration(milliseconds: 1000),
                                displayFullTextOnTap: true,
                                stopPauseOnTap: true,
                              ),
                            ],
                          )),
                      SizedBox(
                        height: height / 3.5,
                      ),
                      Center(
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            TextButton(
                              onPressed: (() {}),
                              child: const Text(
                                'Terms and Conditions',
                                style: TextStyle(color: Colors.black),
                              ),
                            ),
                            const Icon(
                              Icons.fiber_manual_record,
                              color: Colors.black,
                              size: 15,
                            ),
                            TextButton(
                              onPressed: (() {}),
                              child: const Text(
                                'Privacy Policy',
                                style: TextStyle(color: Colors.black),
                              ),
                            ),
                          ],
                        ),
                      )
                    ],
                  ),
                ),
              ),
            );
          } else {
            return Container(
              height: height,
              width: width,
              decoration: BoxDecoration(
                  color: Colors.black,
                  image: DecorationImage(
                      image: AssetImage('assets/images/firstbg.jpeg'),
                      scale: 1.5,
                      fit: BoxFit.cover)),
              child: Padding(
                padding: EdgeInsets.only(
                  top: height / 4.5,
                ),
                child: SingleChildScrollView(
                  child: Column(
                    children: [
                      Image.asset(
                        'assets/pngs/lagen.png',
                        color: Colors.white,
                        scale: 2,
                      ),
                      const Text(
                        'If You Can Dream It, You Can Do It',
                        style: TextStyle(
                            fontWeight: FontWeight.w600, color: Colors.white),
                      ),
                      Padding(
                          padding: const EdgeInsets.only(
                              top: 88.0, left: 60, right: 60),
                          child: Column(
                            children: [
                              Text(
                                "WE'RE STILL",
                                style: GoogleFonts.lato(
                                  textStyle: TextStyle(
                                      color: Colors.white, letterSpacing: .5),
                                ),
                              ),
                              SizedBox(
                                height: 40,
                              ),
                              AnimatedTextKit(
                                animatedTexts: [
                                  TypewriterAnimatedText(
                                    'Cooking Our Website.',
                                    textStyle: const TextStyle(
                                      fontSize: 52.0,
                                      color: Colors.white,
                                      fontWeight: FontWeight.bold,
                                    ),
                                    speed: const Duration(milliseconds: 200),
                                  ),
                                ],
                                totalRepeatCount: 8,
                                pause: const Duration(milliseconds: 1000),
                                displayFullTextOnTap: true,
                                stopPauseOnTap: true,
                              ),
                            ],
                          )),
                      SizedBox(
                        height: height / 4.5,
                      ),
                      Center(
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            TextButton(
                              onPressed: (() {}),
                              child: const Text(
                                'Terms and Conditions',
                                style: TextStyle(color: Colors.white),
                              ),
                            ),
                            const Icon(
                              Icons.fiber_manual_record,
                              color: Colors.white,
                              size: 15,
                            ),
                            TextButton(
                              onPressed: (() {}),
                              child: const Text(
                                'Privacy Policy',
                                style: TextStyle(color: Colors.white),
                              ),
                            ),
                          ],
                        ),
                      )
                    ],
                  ),
                ),
              ),
            );
          }
        },
      ),
    );
  }
}
