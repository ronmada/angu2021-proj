import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Game, Rating } from 'src/app/models'

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss'],
})
export class GameTabsComponent implements OnInit {
  @Input() public game$!: Observable<Game>

  public downvotes: number = 0

  constructor() {}

  ngOnInit(): void {}

  getUpvotes(ratings: Rating[]): number {
    let upvotes: number = 0,
      totalvotes: number = 0
    ratings.forEach((rating) => {
      totalvotes += rating.count
      if (rating.title === 'exceptional' || rating.title === 'recommended')
        upvotes += rating.count
    })
    this.downvotes = totalvotes - upvotes
    return upvotes
  }
}
