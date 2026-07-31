# Code Review Report

- **Project**: `project_69be700d-ca6a-4def-8b2a-6e05eeea7d0d`
- **Files scanned**: 3
- **Total findings**: 1 (0 critical, 0 high, 1 medium, 0 low)

## 🟡 Medium (1)

#### 1. Large script file (366 lines)
- **Location**: `loaders/functional.js`
- **Category**: maintainability
- **Evidence**: 366 lines
- **Suggestion**: Split into smaller single-responsibility modules.

> This file has 366 lines. Oversized scripts are harder to test and maintain.

## Metrics

| Metric | Value |
| --- | --- |
| filesScanned | 3 |
| totalFilesInProject | 67 |
| totalSizeBytes | 30135 |
| findingsTotal | 1 |
| findingsCritical | 0 |
| findingsHigh | 0 |
| findingsMedium | 1 |
| findingsLow | 0 |

## Next Actions

1. Break up oversized or mixed-responsibility files into single-purpose modules.