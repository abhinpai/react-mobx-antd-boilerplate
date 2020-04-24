import { computed } from "mobx";
import Constants from "../utils/Constants";

export default class UtilStore {
  @computed
  public get applicationName() {
    return Constants.ApplicationName;
  }

  @computed
  public get greetingMessage() {
    return Constants.Greeting;
  }
}
