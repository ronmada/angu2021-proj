import { Component, Input, OnInit } from '@angular/core'
import { Game } from 'src/app/models'

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss'],
})
export class GameTabsComponent implements OnInit {
  @Input() public game!: Game
  public upvotes: number = 0
  public downvotes: number = 0
  constructor() {}
  ngOnInit(): void {
    if (this.game) this.getGameRatings()
  }
  getGameRatings(): void {
    let upvotes: number = 0,
      totalvotes: number = 0
    this.game.ratings.forEach((rating) => {
      totalvotes += rating.count
      if (rating.title === 'exceptional' || rating.title === 'recommended')
        upvotes += rating.count
    })
    this.upvotes = upvotes
    this.downvotes = totalvotes - upvotes
  }
}
