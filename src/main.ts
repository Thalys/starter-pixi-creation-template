import { CreationEngine } from '∆/index'
import { setEngine } from '@/getEngine'
import { LoadScreen } from '@/screens/LoadScreen'
import { MainScreen } from '@/screens/main/MainScreen'
import { userSettings } from '@/utils/userSettings'
/**
 * Importing these modules will automatically register their plugins with the engine.
 */
import '@pixi/sound'
import '@esotericsoftware/spine-pixi-v8'

// Create a new creation engine instance
const engine = new CreationEngine()
setEngine(engine);

(async () => {
  // Initialize the creation engine instance
  await engine.init({
    background: '#1E1E1E',
    resizeOptions: { minWidth: 768, minHeight: 1024, letterbox: false },
  })

  // Initialize the user settings
  userSettings.init()

  // Show the load screen
  await engine.navigation.showScreen(LoadScreen)
  // Show the main screen once the load screen is dismissed
  await engine.navigation.showScreen(MainScreen)
})()
