"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdeasController = void 0;
const common_1 = require("@nestjs/common");
const ideas_service_1 = require("./ideas.service");
const create_idea_dto_1 = require("./dto/create-idea.dto");
let IdeasController = class IdeasController {
    ideasService;
    constructor(ideasService) {
        this.ideasService = ideasService;
    }
    async create(createIdeaDto) {
        return this.ideasService.create(createIdeaDto);
    }
};
exports.IdeasController = IdeasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_idea_dto_1.CreateIdeaDto]),
    __metadata("design:returntype", Promise)
], IdeasController.prototype, "create", null);
exports.IdeasController = IdeasController = __decorate([
    (0, common_1.Controller)('ideas'),
    __metadata("design:paramtypes", [ideas_service_1.IdeasService])
], IdeasController);
//# sourceMappingURL=ideas.controller.js.map