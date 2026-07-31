# Code Review Report

- **Project**: `project_69be700d-ca6a-4def-8b2a-6e05eeea7d0d`
- **Files scanned**: 2
- **Total findings**: 1 (0 critical, 0 high, 1 medium, 0 low)

## 🟡 Medium (1)

#### 1. Large script file (398 lines)
- **Location**: `loaders/common.js`
- **Category**: maintainability
- **Evidence**: 398 lines
- **Suggestion**: Split into smaller single-responsibility modules.

> This file has 398 lines. Oversized scripts are harder to test and maintain.

## Metrics

| Metric | Value |
| --- | --- |
| filesScanned | 2 |
| totalFilesInProject | 70 |
| totalSizeBytes | 15025 |
| findingsTotal | 1 |
| findingsCritical | 0 |
| findingsHigh | 0 |
| findingsMedium | 1 |
| findingsLow | 0 |

## Next Actions

1. Break up oversized or mixed-responsibility files into single-purpose modules.