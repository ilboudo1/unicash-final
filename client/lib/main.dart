import 'package:flutter/material.dart';
void main() => runApp(const UniCashApp());
class UniCashApp extends StatelessWidget {
  const UniCashApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('UniCash – Burkina')),
        body: const Center(child: Text('Tontine prête !')),
      ),
    );
  }
}
