window.BENCHMARK_DATA = {
  "lastUpdate": 1679047109345,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "3cb319c420cf611c832339023617574c5baa3b58",
          "message": "@planetarium/account-aws-kms: WIP need tests, created IAM policy\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-15T16:57:35+09:00",
          "tree_id": "8b36d094389e4ba162c0254bc3ee3474e56a7137",
          "url": "https://github.com/planetarium/libplanet/commit/3cb319c420cf611c832339023617574c5baa3b58"
        },
        "date": 1678868312821,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1737595.744680851,
            "unit": "ns",
            "range": "± 165198.61029050036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3102390,
            "unit": "ns",
            "range": "± 157381.38680095688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2617840.659340659,
            "unit": "ns",
            "range": "± 177074.86801916553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6448864.516129033,
            "unit": "ns",
            "range": "± 384744.71452853474"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55332.22222222222,
            "unit": "ns",
            "range": "± 7349.108755531123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8802064.130434783,
            "unit": "ns",
            "range": "± 788064.100642336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24114130.769230768,
            "unit": "ns",
            "range": "± 1734692.3513786597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 57177093.87755102,
            "unit": "ns",
            "range": "± 5176043.708184301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 115231245.91836734,
            "unit": "ns",
            "range": "± 9796851.28051927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 232925870.40816328,
            "unit": "ns",
            "range": "± 15901359.699517684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5717341.927083333,
            "unit": "ns",
            "range": "± 169538.72181963548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1839440.9237132352,
            "unit": "ns",
            "range": "± 36120.18021721291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1417116.4663461538,
            "unit": "ns",
            "range": "± 38598.93891902139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3172972.3214285714,
            "unit": "ns",
            "range": "± 39872.17766918569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1031352.6302083334,
            "unit": "ns",
            "range": "± 9770.57433951956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 929086.07421875,
            "unit": "ns",
            "range": "± 10427.062016891381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3394771.5789473685,
            "unit": "ns",
            "range": "± 339364.05596574745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5519094.565217392,
            "unit": "ns",
            "range": "± 540042.4161941541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27796509.18367347,
            "unit": "ns",
            "range": "± 2520796.292537636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6684437.6344086025,
            "unit": "ns",
            "range": "± 569096.1195107283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32652438,
            "unit": "ns",
            "range": "± 2774684.3991533616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202185.26315789475,
            "unit": "ns",
            "range": "± 16710.965748866773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203989.24731182796,
            "unit": "ns",
            "range": "± 20380.35852377816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182461.05263157896,
            "unit": "ns",
            "range": "± 20753.898863324826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12711030.208333334,
            "unit": "ns",
            "range": "± 1138468.72495885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10152033.673469387,
            "unit": "ns",
            "range": "± 1133679.8508009834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24689.36170212766,
            "unit": "ns",
            "range": "± 5800.731657320301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61375.78947368421,
            "unit": "ns",
            "range": "± 8124.2965756319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45793.81443298969,
            "unit": "ns",
            "range": "± 7743.4086813801105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111898.94736842105,
            "unit": "ns",
            "range": "± 19091.38434810288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11143,
            "unit": "ns",
            "range": "± 5885.322524052629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23960,
            "unit": "ns",
            "range": "± 6891.013031917775"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "3f84081bf69e8a67023e5b51bf141d01b8f9702a",
          "message": "Changelog\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-17T18:08:54+09:00",
          "tree_id": "61ebbe0df335198e2ab126d292f64ee8d1ba4081",
          "url": "https://github.com/planetarium/libplanet/commit/3f84081bf69e8a67023e5b51bf141d01b8f9702a"
        },
        "date": 1679045094920,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1211729.8969072164,
            "unit": "ns",
            "range": "± 110568.73726042213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2068505.8823529412,
            "unit": "ns",
            "range": "± 66117.96134814069"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1807517,
            "unit": "ns",
            "range": "± 124272.42968087443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4301156,
            "unit": "ns",
            "range": "± 113886.81544996038"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34169.41176470588,
            "unit": "ns",
            "range": "± 3779.4249855353014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7442460,
            "unit": "ns",
            "range": "± 136131.36407791663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17526789.47368421,
            "unit": "ns",
            "range": "± 381968.0569755901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 44302642.85714286,
            "unit": "ns",
            "range": "± 387585.8271487664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 86890853.33333333,
            "unit": "ns",
            "range": "± 1207775.4733787396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 176259260,
            "unit": "ns",
            "range": "± 1960311.3308859896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4848100.442708333,
            "unit": "ns",
            "range": "± 10099.038652551497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1509790.4947916667,
            "unit": "ns",
            "range": "± 14942.648110459802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1095589.6223958333,
            "unit": "ns",
            "range": "± 6731.6526377769005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2529399.4401041665,
            "unit": "ns",
            "range": "± 10871.459231649991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817530.78125,
            "unit": "ns",
            "range": "± 7981.227238203674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 716999.4741586539,
            "unit": "ns",
            "range": "± 1662.3282855555256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2876690.277777778,
            "unit": "ns",
            "range": "± 141537.35699550796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4395948.148148148,
            "unit": "ns",
            "range": "± 110532.70789983169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 20784527.777777776,
            "unit": "ns",
            "range": "± 434882.9532259639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5324180.392156863,
            "unit": "ns",
            "range": "± 202589.6966971498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 23566926.315789472,
            "unit": "ns",
            "range": "± 511917.2576827727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 135594.11764705883,
            "unit": "ns",
            "range": "± 6418.405957146113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 148859.59595959596,
            "unit": "ns",
            "range": "± 11353.098284231139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159756,
            "unit": "ns",
            "range": "± 6387.07751508258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11695621.42857143,
            "unit": "ns",
            "range": "± 141515.15916934577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9606288.888888888,
            "unit": "ns",
            "range": "± 199382.11285896378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10113.414634146342,
            "unit": "ns",
            "range": "± 1035.98967952364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 32857.608695652176,
            "unit": "ns",
            "range": "± 3696.247984629765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22440.909090909092,
            "unit": "ns",
            "range": "± 822.169048938059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90532.18390804598,
            "unit": "ns",
            "range": "± 7857.828184666424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5924.742268041237,
            "unit": "ns",
            "range": "± 1012.1173070840007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11484,
            "unit": "ns",
            "range": "± 3600.020201963519"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "ba8209ccee3401e9c0164d1845253437bf55e4b1",
          "message": "Changelog\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-17T18:12:29+09:00",
          "tree_id": "bccba5616dba8f9556e4a998282574511f7cce3f",
          "url": "https://github.com/planetarium/libplanet/commit/ba8209ccee3401e9c0164d1845253437bf55e4b1"
        },
        "date": 1679045486880,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1622205.1020408163,
            "unit": "ns",
            "range": "± 137481.1540017743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2860354,
            "unit": "ns",
            "range": "± 114922.69311078964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2457110.227272727,
            "unit": "ns",
            "range": "± 134506.54988946134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5979395.0617283955,
            "unit": "ns",
            "range": "± 314708.8594642811"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55937.89473684211,
            "unit": "ns",
            "range": "± 4326.420045988797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8307786.363636363,
            "unit": "ns",
            "range": "± 309598.0970067327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22804275,
            "unit": "ns",
            "range": "± 428417.45295914356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 57279338.0952381,
            "unit": "ns",
            "range": "± 1319084.0630817243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 112898120,
            "unit": "ns",
            "range": "± 1622415.976781012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 224717038.8888889,
            "unit": "ns",
            "range": "± 4528453.894853127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5498245.859375,
            "unit": "ns",
            "range": "± 76248.99303345633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1804112.1484375,
            "unit": "ns",
            "range": "± 23577.140559193784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1331053.0859375,
            "unit": "ns",
            "range": "± 15948.256215133257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3037275.78125,
            "unit": "ns",
            "range": "± 38288.688691760195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 963482.59765625,
            "unit": "ns",
            "range": "± 6428.079309752161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 902473.28125,
            "unit": "ns",
            "range": "± 7679.790557342807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3585753.06122449,
            "unit": "ns",
            "range": "± 140919.01057883218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5553097.872340426,
            "unit": "ns",
            "range": "± 215125.49268757133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27201856.060606062,
            "unit": "ns",
            "range": "± 1281159.187626435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7025898.387096774,
            "unit": "ns",
            "range": "± 214063.82050059707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30053586.20689655,
            "unit": "ns",
            "range": "± 860564.6728930529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209870.12987012987,
            "unit": "ns",
            "range": "± 10515.277919282682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208915.7894736842,
            "unit": "ns",
            "range": "± 8959.029552709144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187164.64646464647,
            "unit": "ns",
            "range": "± 13746.653122400918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12796189.285714285,
            "unit": "ns",
            "range": "± 358498.55037599965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10484760,
            "unit": "ns",
            "range": "± 306550.526127367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22539.78494623656,
            "unit": "ns",
            "range": "± 2393.9298137683945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61428.57142857143,
            "unit": "ns",
            "range": "± 4537.603031319649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48567.391304347824,
            "unit": "ns",
            "range": "± 4814.35830274153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112564.58333333333,
            "unit": "ns",
            "range": "± 18064.632378835067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7309.89010989011,
            "unit": "ns",
            "range": "± 713.3730432957911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22793.75,
            "unit": "ns",
            "range": "± 2623.7302693523566"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "772ba99bb79eaac292c4800f6659083fd1127617",
          "message": "Changelog\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-17T18:18:52+09:00",
          "tree_id": "bccba5616dba8f9556e4a998282574511f7cce3f",
          "url": "https://github.com/planetarium/libplanet/commit/772ba99bb79eaac292c4800f6659083fd1127617"
        },
        "date": 1679045726168,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1393079,
            "unit": "ns",
            "range": "± 124797.90070025985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2571420.987654321,
            "unit": "ns",
            "range": "± 134094.42448891135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2189503,
            "unit": "ns",
            "range": "± 157553.63009002825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4990400,
            "unit": "ns",
            "range": "± 131801.15072841107"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47104.12371134021,
            "unit": "ns",
            "range": "± 2799.5132585033566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7664626.923076923,
            "unit": "ns",
            "range": "± 207424.790336531"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20573976.923076924,
            "unit": "ns",
            "range": "± 123605.74524030126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51088936.666666664,
            "unit": "ns",
            "range": "± 322993.01157116314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 100731913.33333333,
            "unit": "ns",
            "range": "± 1367166.1576657996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 200497166.66666666,
            "unit": "ns",
            "range": "± 1956044.121495754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4834785.416666667,
            "unit": "ns",
            "range": "± 12790.962576703343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1520284.6614583333,
            "unit": "ns",
            "range": "± 3636.9560998886586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157924.66796875,
            "unit": "ns",
            "range": "± 5481.383794607837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2643241.8805803573,
            "unit": "ns",
            "range": "± 10394.786260506531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829682.3893229166,
            "unit": "ns",
            "range": "± 1463.920356591743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761823.4049479166,
            "unit": "ns",
            "range": "± 1724.4356798752733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3219525.581395349,
            "unit": "ns",
            "range": "± 109286.52183055603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5073732.142857143,
            "unit": "ns",
            "range": "± 144486.14967217427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23084462.5,
            "unit": "ns",
            "range": "± 451113.67211232544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5989368.571428572,
            "unit": "ns",
            "range": "± 192261.38116916674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26374506.666666668,
            "unit": "ns",
            "range": "± 457026.8552076041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 187474.54545454544,
            "unit": "ns",
            "range": "± 7917.56645604308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185126.4705882353,
            "unit": "ns",
            "range": "± 5906.919867180403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163603.33333333334,
            "unit": "ns",
            "range": "± 9059.509250791045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11379707.142857144,
            "unit": "ns",
            "range": "± 117857.5115212349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9438893.333333334,
            "unit": "ns",
            "range": "± 103330.8933659703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24231.9587628866,
            "unit": "ns",
            "range": "± 2245.483726271125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55774.1935483871,
            "unit": "ns",
            "range": "± 3527.497672812422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43304.166666666664,
            "unit": "ns",
            "range": "± 3200.5893097716494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102263.04347826086,
            "unit": "ns",
            "range": "± 13179.268746838177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6811.111111111111,
            "unit": "ns",
            "range": "± 1164.7798153044162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20716.129032258064,
            "unit": "ns",
            "range": "± 1695.1523160099962"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "d74378dbe64f8a924cdc17c38fcdfa4b228e074c",
          "message": "Changelog\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-17T18:19:29+09:00",
          "tree_id": "bccba5616dba8f9556e4a998282574511f7cce3f",
          "url": "https://github.com/planetarium/libplanet/commit/d74378dbe64f8a924cdc17c38fcdfa4b228e074c"
        },
        "date": 1679045967224,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1663332.9787234042,
            "unit": "ns",
            "range": "± 202147.06061618356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3000418.8172043012,
            "unit": "ns",
            "range": "± 233099.68430139904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2513532.6530612246,
            "unit": "ns",
            "range": "± 192712.65655101783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6179818.75,
            "unit": "ns",
            "range": "± 478741.42967456044"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56228.125,
            "unit": "ns",
            "range": "± 9497.863506295009"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7940179.591836735,
            "unit": "ns",
            "range": "± 575956.0072259214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20964907.36842105,
            "unit": "ns",
            "range": "± 1362814.3293279994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51017492.42424242,
            "unit": "ns",
            "range": "± 2260853.47453707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 104779422.72727273,
            "unit": "ns",
            "range": "± 5723922.268236255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 206501148.38709676,
            "unit": "ns",
            "range": "± 6283823.312382941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5873646.614583333,
            "unit": "ns",
            "range": "± 104418.01641471338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1760717.4269153227,
            "unit": "ns",
            "range": "± 52969.91675624292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1286259.6846417682,
            "unit": "ns",
            "range": "± 44662.07140956272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2902466.378348214,
            "unit": "ns",
            "range": "± 45501.89234005217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 932425.6303267046,
            "unit": "ns",
            "range": "± 20650.22003082834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 868182.1744791666,
            "unit": "ns",
            "range": "± 16229.713954388679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3333063.9175257734,
            "unit": "ns",
            "range": "± 240574.03104587123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5167158.947368421,
            "unit": "ns",
            "range": "± 385210.44552206225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26222768.686868686,
            "unit": "ns",
            "range": "± 1930810.0478680595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6539855.670103093,
            "unit": "ns",
            "range": "± 447611.4893635142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34589313.541666664,
            "unit": "ns",
            "range": "± 2394197.0301728263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 190900,
            "unit": "ns",
            "range": "± 20355.512152731506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197366.30434782608,
            "unit": "ns",
            "range": "± 14989.954710939754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168952,
            "unit": "ns",
            "range": "± 21680.813470146197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11993866.315789474,
            "unit": "ns",
            "range": "± 729072.2318665246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9564816.666666666,
            "unit": "ns",
            "range": "± 609195.8282793658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22208.163265306124,
            "unit": "ns",
            "range": "± 6621.344328407764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57528.42105263158,
            "unit": "ns",
            "range": "± 8864.976067192314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44448.97959183674,
            "unit": "ns",
            "range": "± 8584.42902169068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108890.4255319149,
            "unit": "ns",
            "range": "± 15671.102569090468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11094,
            "unit": "ns",
            "range": "± 6272.367168700339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25067.01030927835,
            "unit": "ns",
            "range": "± 6577.434936481137"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "24b0a1f5a01c49d4e795562f6de5f00594abeccf",
          "message": "Changelog\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-17T18:20:35+09:00",
          "tree_id": "39bbc6389268a9bc4028075bf612fa30327b7382",
          "url": "https://github.com/planetarium/libplanet/commit/24b0a1f5a01c49d4e795562f6de5f00594abeccf"
        },
        "date": 1679046217788,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1617357.4468085107,
            "unit": "ns",
            "range": "± 119674.33990676863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2993378.048780488,
            "unit": "ns",
            "range": "± 107751.42113261226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2608043.6170212766,
            "unit": "ns",
            "range": "± 219225.42704267977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6087475.471698113,
            "unit": "ns",
            "range": "± 251303.61724543205"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61213.44086021505,
            "unit": "ns",
            "range": "± 4002.6291616515764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8840626.666666666,
            "unit": "ns",
            "range": "± 163296.83080936063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23834823.076923076,
            "unit": "ns",
            "range": "± 241815.86022511066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59446464.28571428,
            "unit": "ns",
            "range": "± 437080.71707838844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 119814253.33333333,
            "unit": "ns",
            "range": "± 908526.574708952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 238891830.76923078,
            "unit": "ns",
            "range": "± 1473299.47814682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5951722.314453125,
            "unit": "ns",
            "range": "± 183135.43278220744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836169.1964285714,
            "unit": "ns",
            "range": "± 21831.64629243848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1377514.1376201923,
            "unit": "ns",
            "range": "± 15574.542033969627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3221978.458180147,
            "unit": "ns",
            "range": "± 102365.72356786733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 989213.8746995192,
            "unit": "ns",
            "range": "± 8936.55501257923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 942282.1649966033,
            "unit": "ns",
            "range": "± 36132.95461619457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3892373.3333333335,
            "unit": "ns",
            "range": "± 64453.22187077858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6039552.380952381,
            "unit": "ns",
            "range": "± 142819.67518184468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28186685.714285713,
            "unit": "ns",
            "range": "± 295648.9806852373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7554853.333333333,
            "unit": "ns",
            "range": "± 137363.54718497224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33099828.57142857,
            "unit": "ns",
            "range": "± 1296753.3661032077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218925.53191489363,
            "unit": "ns",
            "range": "± 7982.956521215148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222368.75,
            "unit": "ns",
            "range": "± 9809.630431690544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199600,
            "unit": "ns",
            "range": "± 10882.394572331357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13311152.631578946,
            "unit": "ns",
            "range": "± 218724.65788043258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10762543.75,
            "unit": "ns",
            "range": "± 142969.18534542096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26197.894736842107,
            "unit": "ns",
            "range": "± 2557.507885529676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65493.54838709677,
            "unit": "ns",
            "range": "± 5537.418297593613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53575.77319587629,
            "unit": "ns",
            "range": "± 4714.36807250177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124317.70833333333,
            "unit": "ns",
            "range": "± 20608.90964603042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7626.595744680851,
            "unit": "ns",
            "range": "± 827.8973927274583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25332.98969072165,
            "unit": "ns",
            "range": "± 2546.4322119996204"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "ff2b26f83f662ff9957613d8b22d9daf1033367e",
          "message": "Changelog\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-17T18:28:06+09:00",
          "tree_id": "591cce301b14c3bdda609b103273ba7289081317",
          "url": "https://github.com/planetarium/libplanet/commit/ff2b26f83f662ff9957613d8b22d9daf1033367e"
        },
        "date": 1679046858583,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1692311.224489796,
            "unit": "ns",
            "range": "± 221165.9473437639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3153054.255319149,
            "unit": "ns",
            "range": "± 273861.65878731647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2728751.515151515,
            "unit": "ns",
            "range": "± 261988.2905015524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6656344.791666667,
            "unit": "ns",
            "range": "± 647939.5486535991"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67523.71134020618,
            "unit": "ns",
            "range": "± 17063.550170342856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7995378.947368421,
            "unit": "ns",
            "range": "± 867076.0359422138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19284703,
            "unit": "ns",
            "range": "± 1970949.0882249463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53364203.03030303,
            "unit": "ns",
            "range": "± 4533977.289142515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 106116981,
            "unit": "ns",
            "range": "± 10153933.70035729"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 237028456,
            "unit": "ns",
            "range": "± 23161109.52701288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5801682.955729167,
            "unit": "ns",
            "range": "± 257399.3648893023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1782926.912633384,
            "unit": "ns",
            "range": "± 63723.118105746034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355925.46345339,
            "unit": "ns",
            "range": "± 59377.83523832989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2984402.44140625,
            "unit": "ns",
            "range": "± 77024.28929009498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 932137.6539963942,
            "unit": "ns",
            "range": "± 5521.670296061901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 923587.6376953125,
            "unit": "ns",
            "range": "± 60627.1375611789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3509558.163265306,
            "unit": "ns",
            "range": "± 470248.3511260808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5461892.783505155,
            "unit": "ns",
            "range": "± 523494.5905179407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30194164.285714287,
            "unit": "ns",
            "range": "± 1786605.6744362575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7088975.510204081,
            "unit": "ns",
            "range": "± 751498.6973891385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 35877516.666666664,
            "unit": "ns",
            "range": "± 2928163.630014612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 235352.74725274724,
            "unit": "ns",
            "range": "± 34012.05453188404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222365.625,
            "unit": "ns",
            "range": "± 35034.561366336224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181138.54166666666,
            "unit": "ns",
            "range": "± 24346.854848394116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12738428,
            "unit": "ns",
            "range": "± 1030603.933376401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9231264.285714285,
            "unit": "ns",
            "range": "± 915797.5773782977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31178.78787878788,
            "unit": "ns",
            "range": "± 10320.4500052899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74391.66666666667,
            "unit": "ns",
            "range": "± 13204.414466514932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52735.555555555555,
            "unit": "ns",
            "range": "± 9195.263938646529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128515.38461538461,
            "unit": "ns",
            "range": "± 26446.22183928452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5534.444444444444,
            "unit": "ns",
            "range": "± 784.2782570742038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31921.739130434784,
            "unit": "ns",
            "range": "± 7482.930408044619"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "3b8b4780df5ce1d2c244566536d2291bed7a5b90",
          "message": "temp",
          "timestamp": "2023-03-17T18:42:07+09:00",
          "tree_id": "daef535de31db5c777ace12118d58cc4047e4614",
          "url": "https://github.com/planetarium/libplanet/commit/3b8b4780df5ce1d2c244566536d2291bed7a5b90"
        },
        "date": 1679047058395,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1282766.6666666667,
            "unit": "ns",
            "range": "± 94205.06232743515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2300178.5714285714,
            "unit": "ns",
            "range": "± 65743.8258311808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2024559.375,
            "unit": "ns",
            "range": "± 116687.79720453793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4702439.393939394,
            "unit": "ns",
            "range": "± 145602.5346177779"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42416.21621621621,
            "unit": "ns",
            "range": "± 2020.0384525722325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6885020,
            "unit": "ns",
            "range": "± 58792.53110970571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17476361.53846154,
            "unit": "ns",
            "range": "± 63183.62839720348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 44681226.666666664,
            "unit": "ns",
            "range": "± 377735.6378411204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 89808720,
            "unit": "ns",
            "range": "± 788876.7504677593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 179112630.76923078,
            "unit": "ns",
            "range": "± 1058932.4847730815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4902582.96875,
            "unit": "ns",
            "range": "± 17556.231847937106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1509925.8951822917,
            "unit": "ns",
            "range": "± 1322.416021649663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159702.8450520833,
            "unit": "ns",
            "range": "± 2480.411073335816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2562428.515625,
            "unit": "ns",
            "range": "± 6535.2034577163095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825623.4375,
            "unit": "ns",
            "range": "± 8815.992293553225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733671.7435396635,
            "unit": "ns",
            "range": "± 549.6443492240845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2876008,
            "unit": "ns",
            "range": "± 74802.27224712718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4551906.666666667,
            "unit": "ns",
            "range": "± 46674.44186928777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 20944914.285714287,
            "unit": "ns",
            "range": "± 167604.21261982675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5527927.2727272725,
            "unit": "ns",
            "range": "± 115590.85967249676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24329316.666666668,
            "unit": "ns",
            "range": "± 264971.51762314973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174404.16666666666,
            "unit": "ns",
            "range": "± 6794.520894396982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172127.5,
            "unit": "ns",
            "range": "± 5927.4670293992685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145859.45945945947,
            "unit": "ns",
            "range": "± 4925.413657724567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10135328.57142857,
            "unit": "ns",
            "range": "± 72888.54957632687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8130233.333333333,
            "unit": "ns",
            "range": "± 67822.39283376081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16196.875,
            "unit": "ns",
            "range": "± 1494.5129905582517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46443.01075268817,
            "unit": "ns",
            "range": "± 4102.925728366506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 35041.666666666664,
            "unit": "ns",
            "range": "± 1157.4294177801328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84201.04166666667,
            "unit": "ns",
            "range": "± 13733.19064235614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4493.81443298969,
            "unit": "ns",
            "range": "± 513.5283246386568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16912.76595744681,
            "unit": "ns",
            "range": "± 2099.9223765762977"
          }
        ]
      }
    ]
  }
}