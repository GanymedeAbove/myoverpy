/* 
 * This file is part of OverPy (https://github.com/Zezombye/overpy).
 * Copyright (c) 2019 Zezombye.
 * 
 * This program is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU General Public License as published by  
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License 
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";

astParsingFunctions.__if__ = function(content) {

    //Add the "end" function.
    if (content.parent.childIndex < content.parent.children.length-1 && !["__elif__", "__else__"].includes(content.parent.children[content.parent.childIndex+1].name)) {
        content.parent.children.splice(content.parent.childIndex+1, 0, getAstForEnd());
    }

    return content;

}