import { Microfrontend } from './mfes/mfe';
import { InjectionToken } from "@angular/core";

export const MFE_TOKEN = new InjectionToken<Microfrontend>('mfe_injection_token');
