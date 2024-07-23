import BattleScene from "./battle-scene";

// Phase 阶段
export class Phase {
  // BattleScene 战斗 场景
  protected scene: BattleScene;

  constructor(scene: BattleScene) {
    this.scene = scene;
  }

  start() {
    console.log(`%cStart Phase ${this.constructor.name}`, "color:green;");
    if (this.scene.abilityBar.shown) {
      this.scene.abilityBar.resetAutoHideTimer();
    }
  }

  end() {
    this.scene.shiftPhase();
  }
}
