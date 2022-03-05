import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  salon_site_theme = "salon_site_theme";
  salon_logo_theme = "salon_logo_theme";
  themes: string[] = ["color-theme", "gray-theme", "sepia-theme"]
  logos: string[] = ["original-logo-theme", "new-logo-theme"]

  constructor() {
    if (localStorage.getItem(this.salon_site_theme) == null) {
      this.setTheme("color-theme");
    }
  }
  public setTheme(theme: string) {
    localStorage.setItem(this.salon_site_theme, theme);
  } 
  getTheme() {
    return localStorage.getItem(this.salon_site_theme) ?? "color-theme";
  }
  public setLogo(theme: string) {
    localStorage.setItem(this.salon_logo_theme, theme);
  } 
  getLogo() {
    return localStorage.getItem(this.salon_logo_theme) ?? "original-logo-theme";
  }
}
