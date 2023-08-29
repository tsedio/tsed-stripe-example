import {$log, PlatformLoggerSettings} from "@tsed/common";
import {isProduction} from "../envs/index";

if (isProduction) {
  $log.appenders.set("stdout", {
    type: "stdout",
    levels: ["info", "debug"],
    layout: {
      type: "json"
    }
  });

  $log.appenders.set("stderr", {
    levels: ["trace", "fatal", "error", "warn"],
    type: "stderr",
    layout: {
      type: "json"
    }
  });
}

export default <PlatformLoggerSettings> {
  level: String(process.env.LOG_LEVEL || "info") as any,
  disableRoutesSummary: isProduction,
  ignoreUrlPatterns: ["/health"],
  logStart: false
};
