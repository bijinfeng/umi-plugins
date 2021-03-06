"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = _default;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function _react() {
    return data;
  };

  return data;
}

function _path() {
  const data = require("path");

  _path = function _path() {
    return data;
  };

  return data;
}

function _fs() {
  const data = require("fs");

  _fs = function _fs() {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _default(api) {
  const paths = api.paths,
    winPath = api.utils.winPath;
  api.addRuntimePluginKey(() => "request"); // 配置

  api.describe({
    config: {
      schema(joi) {
        return joi.object({
          dataField: joi
            .string()
            .pattern(/^[a-zA-Z]*$/)
            .allow(""),
        });
      },

      default: {
        dataField: "data",
      },
    },
  });
  const source = (0, _path().join)(__dirname, "..", "src", "request.ts");
  const requestTemplate = (0, _fs().readFileSync)(source, "utf-8");
  const namespace = "plugin-request";
  api.onGenerateFiles(() => {
    const _ref = api.config.request,
      _ref$dataField = _ref.dataField,
      dataField = _ref$dataField === void 0 ? "data" : _ref$dataField;

    try {
      // Write .umi/plugin-request/request.ts
      let formatResultStr;

      if (dataField === "") {
        formatResultStr = "formatResult: result => result";
      } else {
        formatResultStr = `formatResult: result => result?.${dataField}`;
      }

      api.writeTmpFile({
        path: `${namespace}/request.ts`,
        content: requestTemplate
          .replace(/\/\*FRS\*\/(.+)\/\*FRE\*\//, formatResultStr)
          .replace(/\['data'\]/g, dataField ? `['${dataField}']` : "")
          .replace(/data\?: T;/, dataField ? `${dataField}?: T;` : "")
          .replace(
            /umi-request/g,
            winPath(
              (0, _path().dirname)(require.resolve("umi-request/package"))
            )
          )
          .replace(
            /@ahooksjs\/use-request/g,
            winPath(
              (0, _path().dirname)(
                require.resolve("@ahooksjs/use-request/package")
              )
            )
          )
          .replace(
            `import { ApplyPluginsType, history, plugin } from 'umi';`,
            `
import { ApplyPluginsType } from 'umi';
import { history, plugin } from '../core/umiExports';
            `
          ),
      });
    } catch (e) {
      api.logger.error(e);
    }
  });
  api.addUmiExports(() => {
    return [
      {
        exportAll: true,
        source: `../${namespace}/request`,
      },
    ];
  });
}
