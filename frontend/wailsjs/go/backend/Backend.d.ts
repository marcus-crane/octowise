// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {backend} from '../models';

export function CheckForUpdate():Promise<boolean|string>;

export function DetectKobos():Promise<Array<backend.Kobo>>;

export function FormatSystemDetails():Promise<string>;

export function ForwardToReadwise():Promise<number>;

export function GetBookmark():Promise<backend.Bookmark>;

export function GetContent():Promise<backend.Content>;

export function GetPlainSystemDetails():Promise<string>;

export function GetSelectedKobo():Promise<backend.Kobo>;

export function GetSettings():Promise<backend.Settings>;

export function NavigateExplorerToLogLocation():Promise<void>;

export function PerformUpdate():Promise<boolean>;

export function PromptForLocalDBPath():Promise<Error>;

export function SelectKobo(arg1:string):Promise<Error>;
