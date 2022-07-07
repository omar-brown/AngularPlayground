import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currencies = [
    {
      name: 'Bitcoin',
      imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
      symbol: 'BTC',
      price: 20425.1,
      notes: 'MACD Bearish, Death Cross',
    },
    {
      name: 'Ethereum',
      imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
      symbol: 'ETH',
      price: 1182.35,
      notes: 'Bullish',
    },
    {
      name: 'Tether',
      imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
      symbol: 'USDT',
      price: 0.9992,
      notes: '',
    },
    {
      name: 'USD Coin',
      imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png',
      symbol: 'USDC',
      price: 1,
      notes: '',
    },
  ];
  getStatusClasses(server: {
    instanceType: string;
    name: string;
    status: string;
    started: Date;
  }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical',
    };
  }
}
