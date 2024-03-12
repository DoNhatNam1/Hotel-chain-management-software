/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/users/src/dto/user.dto.ts":
/*!****************************************!*\
  !*** ./apps/users/src/dto/user.dto.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResetPasswordDto = exports.ForgotPasswordDto = exports.LoginDto = exports.ActivationDto = exports.RegisterDto = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
let RegisterDto = class RegisterDto {
};
exports.RegisterDto = RegisterDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required.' }),
    (0, class_validator_1.IsString)({ message: 'Name must need to be one string.' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required.' }),
    (0, class_validator_1.MinLength)(8, { message: 'Password must be at least 8 characters.' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required.' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Email is invalid.' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Phone Number is required.' }),
    __metadata("design:type", Number)
], RegisterDto.prototype, "phone_number", void 0);
exports.RegisterDto = RegisterDto = __decorate([
    (0, graphql_1.InputType)()
], RegisterDto);
let ActivationDto = class ActivationDto {
};
exports.ActivationDto = ActivationDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Activation Token is required.' }),
    __metadata("design:type", String)
], ActivationDto.prototype, "activationToken", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Activation Code is required.' }),
    __metadata("design:type", String)
], ActivationDto.prototype, "activationCode", void 0);
exports.ActivationDto = ActivationDto = __decorate([
    (0, graphql_1.InputType)()
], ActivationDto);
let LoginDto = class LoginDto {
};
exports.LoginDto = LoginDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required.' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be valid.' }),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required.' }),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
exports.LoginDto = LoginDto = __decorate([
    (0, graphql_1.InputType)()
], LoginDto);
let ForgotPasswordDto = class ForgotPasswordDto {
};
exports.ForgotPasswordDto = ForgotPasswordDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required.' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be valid.' }),
    __metadata("design:type", String)
], ForgotPasswordDto.prototype, "email", void 0);
exports.ForgotPasswordDto = ForgotPasswordDto = __decorate([
    (0, graphql_1.InputType)()
], ForgotPasswordDto);
let ResetPasswordDto = class ResetPasswordDto {
};
exports.ResetPasswordDto = ResetPasswordDto;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required.' }),
    (0, class_validator_1.MinLength)(8, { message: 'Password must be at least 8 characters.' }),
    __metadata("design:type", String)
], ResetPasswordDto.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Activation Token is required.' }),
    __metadata("design:type", String)
], ResetPasswordDto.prototype, "activationToken", void 0);
exports.ResetPasswordDto = ResetPasswordDto = __decorate([
    (0, graphql_1.InputType)()
], ResetPasswordDto);


/***/ }),

/***/ "./apps/users/src/email/email.module.ts":
/*!**********************************************!*\
  !*** ./apps/users/src/email/email.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const email_service_1 = __webpack_require__(/*! ./email.service */ "./apps/users/src/email/email.service.ts");
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const path_1 = __webpack_require__(/*! path */ "path");
const ejs_adapter_1 = __webpack_require__(/*! @nestjs-modules/mailer/dist/adapters/ejs.adapter */ "@nestjs-modules/mailer/dist/adapters/ejs.adapter");
let EmailModule = class EmailModule {
};
exports.EmailModule = EmailModule;
exports.EmailModule = EmailModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRootAsync({
                useFactory: async (config) => ({
                    transport: {
                        host: config.get('SMTP_HOST'),
                        secure: true,
                        auth: {
                            user: config.get('SMTP_MAIL'),
                            pass: config.get('SMTP_PASSWORD'),
                        },
                    },
                    defaults: {
                        from: 'Welding Store',
                    },
                    template: {
                        dir: (0, path_1.join)(__dirname, '../../../../gateway/email-templates'),
                        adapter: new ejs_adapter_1.EjsAdapter(),
                        options: {
                            strict: false,
                        },
                    },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [email_service_1.EmailService],
        exports: [email_service_1.EmailService],
    })
], EmailModule);


/***/ }),

/***/ "./apps/users/src/email/email.service.ts":
/*!***********************************************!*\
  !*** ./apps/users/src/email/email.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailService = void 0;
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let EmailService = class EmailService {
    constructor(mailService) {
        this.mailService = mailService;
    }
    async sendMail({ subject, email, name, activationCode, template, }) {
        await this.mailService.sendMail({
            to: email,
            subject,
            template,
            context: {
                name,
                activationCode,
            },
        });
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof mailer_1.MailerService !== "undefined" && mailer_1.MailerService) === "function" ? _a : Object])
], EmailService);


/***/ }),

/***/ "./apps/users/src/entities/user.entity.ts":
/*!************************************************!*\
  !*** ./apps/users/src/entities/user.entity.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = exports.Avatars = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let Avatars = class Avatars {
};
exports.Avatars = Avatars;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Avatars.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Avatars.prototype, "public_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Avatars.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Avatars.prototype, "userId", void 0);
exports.Avatars = Avatars = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, graphql_1.Directive)('@key(fields:"id")')
], Avatars);
let User = class User {
};
exports.User = User;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Avatars, { nullable: true }),
    __metadata("design:type", Avatars)
], User.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "phone_number", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], User.prototype, "updatedAt", void 0);
exports.User = User = __decorate([
    (0, graphql_1.ObjectType)()
], User);


/***/ }),

/***/ "./apps/users/src/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./apps/users/src/guards/auth.guard.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const prisma_service_1 = __webpack_require__(/*! ../../../../prisma/prisma.service */ "./prisma/prisma.service.ts");
let AuthGuard = class AuthGuard {
    constructor(jwtService, prisma, config) {
        this.jwtService = jwtService;
        this.prisma = prisma;
        this.config = config;
    }
    async canActivate(context) {
        const gqlContext = graphql_1.GqlExecutionContext.create(context);
        const { req } = gqlContext.getContext();
        const accessToken = req.headers.accesstoken;
        const refreshToken = req.headers.refreshtoken;
        if (!accessToken || !refreshToken) {
            throw new common_1.UnauthorizedException('Please login to access this resource!');
        }
        if (accessToken) {
            const decoded = this.jwtService.decode(accessToken);
            const expirationTime = decoded?.exp;
            if (expirationTime * 1000 < Date.now()) {
                await this.updateAccessToken(req);
            }
        }
        return true;
    }
    async updateAccessToken(req) {
        try {
            const refreshTokenData = req.headers.refreshtoken;
            const decoded = this.jwtService.decode(refreshTokenData);
            const expirationTime = decoded.exp * 1000;
            if (expirationTime < Date.now()) {
                throw new common_1.UnauthorizedException('Please login to access this resource!');
            }
            const user = await this.prisma.user.findUnique({
                where: {
                    id: decoded.id,
                },
            });
            const accessToken = this.jwtService.sign({ id: user.id }, {
                secret: this.config.get('ACCESS_TOKEN_SECRET'),
                expiresIn: '5m',
            });
            const refreshToken = this.jwtService.sign({ id: user.id }, {
                secret: this.config.get('REFRESH_TOKEN_SECRET'),
                expiresIn: '7d',
            });
            req.accesstoken = accessToken;
            req.refreshtoken = refreshToken;
            req.user = user;
        }
        catch (error) {
            throw new common_1.UnauthorizedException(error.message);
        }
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], AuthGuard);


/***/ }),

/***/ "./apps/users/src/types/user.types.ts":
/*!********************************************!*\
  !*** ./apps/users/src/types/user.types.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResetPasswordResponse = exports.ForgotPasswordResponse = exports.LogoutResposne = exports.LoginResponse = exports.ActivationResponse = exports.RegisterResponse = exports.ErrorType = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./apps/users/src/entities/user.entity.ts");
let ErrorType = class ErrorType {
};
exports.ErrorType = ErrorType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ErrorType.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ErrorType.prototype, "code", void 0);
exports.ErrorType = ErrorType = __decorate([
    (0, graphql_1.ObjectType)()
], ErrorType);
let RegisterResponse = class RegisterResponse {
};
exports.RegisterResponse = RegisterResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RegisterResponse.prototype, "activation_token", void 0);
__decorate([
    (0, graphql_1.Field)(() => ErrorType, { nullable: true }),
    __metadata("design:type", ErrorType)
], RegisterResponse.prototype, "error", void 0);
exports.RegisterResponse = RegisterResponse = __decorate([
    (0, graphql_1.ObjectType)()
], RegisterResponse);
let ActivationResponse = class ActivationResponse {
};
exports.ActivationResponse = ActivationResponse;
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User),
    __metadata("design:type", Object)
], ActivationResponse.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => ErrorType, { nullable: true }),
    __metadata("design:type", ErrorType)
], ActivationResponse.prototype, "error", void 0);
exports.ActivationResponse = ActivationResponse = __decorate([
    (0, graphql_1.ObjectType)()
], ActivationResponse);
let LoginResponse = class LoginResponse {
};
exports.LoginResponse = LoginResponse;
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User, { nullable: true }),
    __metadata("design:type", Object)
], LoginResponse.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], LoginResponse.prototype, "accessToken", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], LoginResponse.prototype, "refreshToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => ErrorType, { nullable: true }),
    __metadata("design:type", ErrorType)
], LoginResponse.prototype, "error", void 0);
exports.LoginResponse = LoginResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LoginResponse);
let LogoutResposne = class LogoutResposne {
};
exports.LogoutResposne = LogoutResposne;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LogoutResposne.prototype, "message", void 0);
exports.LogoutResposne = LogoutResposne = __decorate([
    (0, graphql_1.ObjectType)()
], LogoutResposne);
let ForgotPasswordResponse = class ForgotPasswordResponse {
};
exports.ForgotPasswordResponse = ForgotPasswordResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ForgotPasswordResponse.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => ErrorType, { nullable: true }),
    __metadata("design:type", ErrorType)
], ForgotPasswordResponse.prototype, "error", void 0);
exports.ForgotPasswordResponse = ForgotPasswordResponse = __decorate([
    (0, graphql_1.ObjectType)()
], ForgotPasswordResponse);
let ResetPasswordResponse = class ResetPasswordResponse {
};
exports.ResetPasswordResponse = ResetPasswordResponse;
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User),
    __metadata("design:type", Object)
], ResetPasswordResponse.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => ErrorType, { nullable: true }),
    __metadata("design:type", ErrorType)
], ResetPasswordResponse.prototype, "error", void 0);
exports.ResetPasswordResponse = ResetPasswordResponse = __decorate([
    (0, graphql_1.ObjectType)()
], ResetPasswordResponse);


/***/ }),

/***/ "./apps/users/src/user.resolver.ts":
/*!*****************************************!*\
  !*** ./apps/users/src/user.resolver.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersResolver = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/users/src/users.service.ts");
const user_types_1 = __webpack_require__(/*! ./types/user.types */ "./apps/users/src/types/user.types.ts");
const user_dto_1 = __webpack_require__(/*! ./dto/user.dto */ "./apps/users/src/dto/user.dto.ts");
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./apps/users/src/entities/user.entity.ts");
const auth_guard_1 = __webpack_require__(/*! ./guards/auth.guard */ "./apps/users/src/guards/auth.guard.ts");
let UsersResolver = class UsersResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async register(registerDto, context) {
        if (!registerDto.name || !registerDto.email || !registerDto.password) {
            throw new common_1.BadRequestException('Please fill the all fields');
        }
        const { activation_token } = await this.userService.register(registerDto, context.res);
        return { activation_token };
    }
    async activateUser(activationDto, context) {
        return await this.userService.activateUser(activationDto, context.res);
    }
    async Login(email, password) {
        return await this.userService.Login({ email, password });
    }
    async getLoggedInUser(context) {
        return await this.userService.getLoggedInUser(context.req);
    }
    async forgotPassword(forgotPasswordDto) {
        return await this.userService.forgotPassword(forgotPasswordDto);
    }
    async resetPassword(resetPasswordDto) {
        return await this.userService.resetPassword(resetPasswordDto);
    }
    async logOutUser(context) {
        return await this.userService.Logout(context.req);
    }
    async getUsers() {
        return this.userService.getUsers();
    }
};
exports.UsersResolver = UsersResolver;
__decorate([
    (0, graphql_1.Mutation)(() => user_types_1.RegisterResponse),
    __param(0, (0, graphql_1.Args)('registerDto')),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof user_dto_1.RegisterDto !== "undefined" && user_dto_1.RegisterDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UsersResolver.prototype, "register", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_types_1.ActivationResponse),
    __param(0, (0, graphql_1.Args)('activationDto')),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof user_dto_1.ActivationDto !== "undefined" && user_dto_1.ActivationDto) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UsersResolver.prototype, "activateUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_types_1.LoginResponse),
    __param(0, (0, graphql_1.Args)('email')),
    __param(1, (0, graphql_1.Args)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], UsersResolver.prototype, "Login", null);
__decorate([
    (0, graphql_1.Query)(() => user_types_1.LoginResponse),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getLoggedInUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_types_1.ForgotPasswordResponse),
    __param(0, (0, graphql_1.Args)('forgotPasswordDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof user_dto_1.ForgotPasswordDto !== "undefined" && user_dto_1.ForgotPasswordDto) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], UsersResolver.prototype, "forgotPassword", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_types_1.ResetPasswordResponse),
    __param(0, (0, graphql_1.Args)('resetPasswordDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof user_dto_1.ResetPasswordDto !== "undefined" && user_dto_1.ResetPasswordDto) === "function" ? _j : Object]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], UsersResolver.prototype, "resetPassword", null);
__decorate([
    (0, graphql_1.Query)(() => user_types_1.LogoutResposne),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "logOutUser", null);
__decorate([
    (0, graphql_1.Query)(() => [user_entity_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getUsers", null);
exports.UsersResolver = UsersResolver = __decorate([
    (0, graphql_1.Resolver)('User'),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersResolver);


/***/ }),

/***/ "./apps/users/src/users.module.ts":
/*!****************************************!*\
  !*** ./apps/users/src/users.module.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/users/src/users.service.ts");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const apollo_1 = __webpack_require__(/*! @nestjs/apollo */ "@nestjs/apollo");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./prisma/prisma.service.ts");
const user_resolver_1 = __webpack_require__(/*! ./user.resolver */ "./apps/users/src/user.resolver.ts");
const email_module_1 = __webpack_require__(/*! ./email/email.module */ "./apps/users/src/email/email.module.ts");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloFederationDriver,
                autoSchemaFile: {
                    federation: 2,
                },
            }),
            email_module_1.EmailModule,
        ],
        controllers: [],
        providers: [
            users_service_1.UsersService,
            config_1.ConfigService,
            jwt_1.JwtService,
            prisma_service_1.PrismaService,
            user_resolver_1.UsersResolver,
        ],
    })
], UsersModule);


/***/ }),

/***/ "./apps/users/src/users.service.ts":
/*!*****************************************!*\
  !*** ./apps/users/src/users.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const prisma_service_1 = __webpack_require__(/*! ../../../prisma/prisma.service */ "./prisma/prisma.service.ts");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
const email_service_1 = __webpack_require__(/*! ./email/email.service */ "./apps/users/src/email/email.service.ts");
const sendToken_1 = __webpack_require__(/*! ./utils/sendToken */ "./apps/users/src/utils/sendToken.ts");
let UsersService = class UsersService {
    constructor(jwtService, prisma, configService, emailService) {
        this.jwtService = jwtService;
        this.prisma = prisma;
        this.configService = configService;
        this.emailService = emailService;
    }
    async register(registerDto, response) {
        const { name, email, password, phone_number } = registerDto;
        const isEmailExist = await this.prisma.user.findUnique({
            where: {
                email,
            },
        });
        const isEmailExistSub = await this.prisma.subUser.findUnique({
            where: {
                email,
            },
        });
        if (isEmailExist || isEmailExistSub) {
            throw new common_1.BadRequestException('User already exist with this email!');
        }
        const phoneNumbersToCheck = [phone_number];
        const usersWithPhoneNumber = await this.prisma.user.findMany({
            where: {
                phone_number: {
                    not: null,
                    in: phoneNumbersToCheck,
                },
            },
        });
        const subusersWithPhoneNumber = await this.prisma.subUser.findMany({
            where: {
                phone_number: {
                    not: null,
                    in: phoneNumbersToCheck,
                },
            },
        });
        if (usersWithPhoneNumber.length || subusersWithPhoneNumber.length > 0) {
            throw new common_1.BadRequestException('User already exist with this phone number!');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = {
            name,
            email,
            password: hashedPassword,
            phone_number,
        };
        const activationToken = await this.createActivationToken(user);
        const activationCode = activationToken.activationCode;
        const activation_token = activationToken.token;
        await this.emailService.sendMail({
            email,
            subject: 'Activate your account!',
            template: './activation-mail',
            name,
            activationCode,
        });
        return { activation_token, response };
    }
    async createActivationToken(user) {
        const activationCode = Math.floor(1000 + Math.random() * 9000).toString();
        const token = this.jwtService.sign({
            user,
            activationCode,
        }, {
            secret: this.configService.get('ACTIVATION_SECRET'),
            expiresIn: '5m',
        });
        return { token, activationCode };
    }
    async activateUser(activationDto, response) {
        const { activationToken, activationCode } = activationDto;
        const newUser = this.jwtService.verify(activationToken, {
            secret: this.configService.get('ACTIVATION_SECRET'),
        });
        if (newUser.activationCode !== activationCode) {
            throw new common_1.BadRequestException('Invalid activation code');
        }
        const { name, email, password, phone_number } = newUser.user;
        const existUser = await this.prisma.user.findUnique({
            where: {
                email,
            },
        });
        const exitstsubuser = await this.prisma.subUser.findUnique({
            where: {
                email,
            },
        });
        if (existUser || exitstsubuser) {
            throw new common_1.BadRequestException('User already exist with this email!');
        }
        const user = await this.prisma.user.create({
            data: {
                name,
                email,
                password,
                phone_number,
                ChiNhanh: {
                    create: {
                        TenChiNhanh: 'Chi Nhánh Trung Tâm',
                        KhachSan: {
                            create: {
                                TenKhachSan: 'Khách sạn Trung Tâm',
                            },
                        },
                    },
                },
            },
        });
        return { user, response };
    }
    async Login(loginDto) {
        const { email, password } = loginDto;
        const user = await this.prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (user && (await this.comparePassword(password, user.password))) {
            const tokenSender = new sendToken_1.TokenSender(this.configService, this.jwtService);
            return tokenSender.sendToken(user);
        }
        else {
            return {
                user: null,
                accessToken: null,
                refreshToken: null,
                error: {
                    message: 'Email hoặc Password không hợp lệ',
                },
            };
        }
    }
    async comparePassword(password, hashedPassword) {
        return await bcrypt.compare(password, hashedPassword);
    }
    async generateForgotPasswordLink(user) {
        const forgotPasswordToken = this.jwtService.sign({
            user,
        }, {
            secret: this.configService.get('FORGOT_PASSWORD_SECRET'),
            expiresIn: '5m',
        });
        return forgotPasswordToken;
    }
    async forgotPassword(forgotPasswordDto) {
        const { email } = forgotPasswordDto;
        const user = await this.prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!user) {
            throw new common_1.BadRequestException('User not found with this email!');
        }
        const forgotPasswordToken = await this.generateForgotPasswordLink(user);
        const resetPasswordUrl = this.configService.get('CLIENT_SIDE_URI') +
            `/reset-password?verify=${forgotPasswordToken}`;
        await this.emailService.sendMail({
            email,
            subject: 'Reset your Password!',
            template: './forgot-password',
            name: user.name,
            activationCode: resetPasswordUrl,
        });
        return { message: `Your forgot password request successful!` };
    }
    async resetPassword(resetPasswordDto) {
        const { password, activationToken } = resetPasswordDto;
        const decoded = await this.jwtService.decode(activationToken);
        if (!decoded || decoded?.exp * 1000 < Date.now()) {
            throw new common_1.BadRequestException('Invalid token!');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.prisma.user.update({
            where: {
                id: decoded.user.id,
            },
            data: {
                password: hashedPassword,
            },
        });
        return { user };
    }
    async getLoggedInUser(req) {
        const user = req.user;
        const refreshToken = req.refreshtoken;
        const accessToken = req.accesstoken;
        return { user, refreshToken, accessToken };
    }
    async Logout(req) {
        req.user = null;
        req.refreshtoken = null;
        req.accesstoken = null;
        return { message: 'Logged out successfully!' };
    }
    async getUsers() {
        return this.prisma.user.findMany({});
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object, typeof (_d = typeof email_service_1.EmailService !== "undefined" && email_service_1.EmailService) === "function" ? _d : Object])
], UsersService);


/***/ }),

/***/ "./apps/users/src/utils/sendToken.ts":
/*!*******************************************!*\
  !*** ./apps/users/src/utils/sendToken.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenSender = void 0;
class TokenSender {
    constructor(config, jwt) {
        this.config = config;
        this.jwt = jwt;
    }
    sendToken(user) {
        const accessToken = this.jwt.sign({
            id: user.id,
        }, {
            secret: this.config.get('ACCESS_TOKEN_SECRET'),
            expiresIn: '1m',
        });
        const refreshToken = this.jwt.sign({
            id: user.id,
        }, {
            secret: this.config.get('REFRESH_TOKEN_SECRET'),
            expiresIn: '3d',
        });
        return { user, accessToken, refreshToken };
    }
}
exports.TokenSender = TokenSender;


/***/ }),

/***/ "./prisma/prisma.service.ts":
/*!**********************************!*\
  !*** ./prisma/prisma.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)()
], PrismaService);


/***/ }),

/***/ "@nestjs-modules/mailer":
/*!*****************************************!*\
  !*** external "@nestjs-modules/mailer" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer");

/***/ }),

/***/ "@nestjs-modules/mailer/dist/adapters/ejs.adapter":
/*!*******************************************************************!*\
  !*** external "@nestjs-modules/mailer/dist/adapters/ejs.adapter" ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer/dist/adapters/ejs.adapter");

/***/ }),

/***/ "@nestjs/apollo":
/*!*********************************!*\
  !*** external "@nestjs/apollo" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/graphql":
/*!**********************************!*\
  !*** external "@nestjs/graphql" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************************!*\
  !*** ./apps/users/src/main.ts ***!
  \********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const users_module_1 = __webpack_require__(/*! ./users.module */ "./apps/users/src/users.module.ts");
const path_1 = __webpack_require__(/*! path */ "path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(users_module_1.UsersModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'gateway/email-templates'));
    app.setViewEngine('ejs');
    app.enableCors({
        origin: '*',
    });
    await app.listen(4002);
}
bootstrap();

})();

/******/ })()
;