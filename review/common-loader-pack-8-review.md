# Code Review Report

- **Project**: `project_69be700d-ca6a-4def-8b2a-6e05eeea7d0d`
- **Files scanned**: 4
- **Total findings**: 2 (0 critical, 0 high, 1 medium, 1 low)

## 🟡 Medium (1)

#### 1. Large script file (331 lines)
- **Location**: `loaders/common-navigation-loaders.js`
- **Category**: maintainability
- **Evidence**: 331 lines
- **Suggestion**: Split into smaller single-responsibility modules.

> This file has 331 lines. Oversized scripts are harder to test and maintain.

## 🔵 Low (1)

#### 1. High import count (21 imports)
- **Location**: `loaders/common-index.js`
- **Category**: naming
- **Evidence**: 21 import statements
- **Suggestion**: Group related imports behind a barrel module or split the file.

> File imports from 21 modules, suggesting too many responsibilities or a need to split.

## Metrics

| Metric | Value |
| --- | --- |
| filesScanned | 4 |
| totalFilesInProject | 125 |
| totalSizeBytes | 27518 |
| findingsTotal | 2 |
| findingsCritical | 0 |
| findingsHigh | 0 |
| findingsMedium | 1 |
| findingsLow | 1 |

## Next Actions

1. Break up oversized or mixed-responsibility files into single-purpose modules.