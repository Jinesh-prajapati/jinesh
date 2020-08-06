import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DragdropComponent } from "./dragdrop/dragdrop.component";
const routes: Routes = [
  { path: "dragdrop", component: DragdropComponent },
  { path: "", redirectTo: "dragdrop", pathMatch: "full" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
